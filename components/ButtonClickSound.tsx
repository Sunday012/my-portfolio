"use client";

import { useEffect, useRef } from "react";

const clickableSelector =
  "button, [role='button'], input[type='button'], input[type='submit'], input[type='reset']";

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

function isButtonLikeElement(element: Element) {
  const tagName = element.tagName.toLowerCase();

  if (tagName === "button" || tagName === "input") {
    return true;
  }

  if (element.getAttribute("role") === "button") {
    return true;
  }

  return false;
}

function isDisabled(element: Element) {
  return (
    element.hasAttribute("disabled") ||
    element.getAttribute("aria-disabled") === "true"
  );
}

function createKeyNoise(audioContext: AudioContext) {
  const sampleRate = audioContext.sampleRate;
  const duration = 0.018;
  const frameCount = Math.floor(sampleRate * duration);
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < frameCount; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / frameCount);
  }

  return buffer;
}

export function ButtonClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const keyNoiseRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const playClick = () => {
      const browserWindow = window as WindowWithWebkitAudio;
      const AudioContextClass =
        browserWindow.AudioContext || browserWindow.webkitAudioContext;

      if (!AudioContextClass) {
        return;
      }

      const audioContext =
        audioContextRef.current ?? new AudioContextClass({ latencyHint: "interactive" });

      audioContextRef.current = audioContext;

      if (audioContext.state === "suspended") {
        void audioContext.resume();
      }

      const now = audioContext.currentTime;

      keyNoiseRef.current ??= createKeyNoise(audioContext);

      const keySnap = audioContext.createBufferSource();
      const snapFilter = audioContext.createBiquadFilter();
      const snapGain = audioContext.createGain();

      keySnap.buffer = keyNoiseRef.current;
      snapFilter.type = "bandpass";
      snapFilter.frequency.setValueAtTime(2200, now);
      snapFilter.Q.setValueAtTime(3.2, now);
      snapGain.gain.setValueAtTime(0.11, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

      keySnap.connect(snapFilter);
      snapFilter.connect(snapGain);
      snapGain.connect(audioContext.destination);

      const keyBody = audioContext.createOscillator();
      const bodyFilter = audioContext.createBiquadFilter();
      const bodyGain = audioContext.createGain();

      keyBody.type = "square";
      keyBody.frequency.setValueAtTime(160, now);
      keyBody.frequency.exponentialRampToValueAtTime(95, now + 0.035);
      bodyFilter.type = "lowpass";
      bodyFilter.frequency.setValueAtTime(420, now);
      bodyGain.gain.setValueAtTime(0.0001, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.055, now + 0.003);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      keyBody.connect(bodyFilter);
      bodyFilter.connect(bodyGain);
      bodyGain.connect(audioContext.destination);

      keySnap.start(now);
      keySnap.stop(now + 0.024);
      keyBody.start(now);
      keyBody.stop(now + 0.05);
    };

    const handleInteraction = (event: PointerEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent) {
        if (event.repeat || (event.key !== "Enter" && event.key !== " ")) {
          return;
        }
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const clickable = target.closest(clickableSelector);

      if (!clickable || isDisabled(clickable) || !isButtonLikeElement(clickable)) {
        return;
      }

      playClick();
    };

    document.addEventListener("pointerdown", handleInteraction, { capture: true });
    document.addEventListener("keydown", handleInteraction, { capture: true });

    return () => {
      document.removeEventListener("pointerdown", handleInteraction, { capture: true });
      document.removeEventListener("keydown", handleInteraction, { capture: true });
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, []);

  return null;
}
