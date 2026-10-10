"use client";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const useDarkTheme = !root.classList.contains("dark");

    root.classList.toggle("dark", useDarkTheme);

    try {
      window.localStorage.setItem(storageKey, useDarkTheme ? "dark" : "light");
    } catch {
      // The selected theme still applies for this visit when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="fixed bottom-5 right-5 z-50 flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-800 shadow-lg backdrop-blur transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 dark:focus-visible:outline-neutral-100"
    >
      <svg className="size-5 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5Z" />
      </svg>
      <svg className="hidden size-5 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
      </svg>
    </button>
  );
}
