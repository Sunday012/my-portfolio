export const profile = {
  name: "Favour Sunday",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  email: "sundayfavour997@gmail.com",
  github: "https://github.com/Sunday012",
  linkedin: "https://linkedin.com/in/favour-sunday-6059682a2",
  image: "/images/my-pfp.jpeg",
  summary:
    "I build fullstack products across healthcare, AI tooling, developer workflows, payments, and polished dashboards.",
  focus: [
    "Go and TypeScript systems",
    "Healthcare-grade product flows",
    "AI integrations and RAG",
    "Dashboard UX and design systems",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: profile.github, short: "GH" },
  { label: "LinkedIn", href: profile.linkedin, short: "IN" },
  { label: "Email", href: `mailto:${profile.email}`, short: "@" },
  { label: "Resume", href: "/favour-sunday-software-engineer-cv.pdf", short: "CV" },
];

export const bio = [
  "Favour Sunday is a Software Engineer and Computer Science student at the University of Uyo. He builds fullstack products with Go, TypeScript, React, Next.js, Node.js, PostgreSQL, MySQL, and Tailwind CSS.",
  "His work spans telemedicine platforms, AI assistants, email automation, payment flows, authenticated dashboards, RBAC-protected admin tools, and developer tooling. He likes building software that feels simple to use while hiding serious engineering underneath.",
];

export const timeline = [
  {
    period: "2025 - 2026",
    title: "Software Engineer",
    company: "StatwellMD",
    mark: "SM",
    accent: "emerald",
    logo: "/statwellmd.png",
    href: "https://statwellmd.com",
    description:
      "Built authenticated telemedicine features across consultations, prescriptions, records, scheduling, payments, patient dashboards, admin workflows, OTP verification, RBAC, and protected data fetching.",
  },
  {
    period: "2025 - 2026",
    title: "Software Engineer",
    company: "ProxyMedicine",
    mark: "PX",
    accent: "blue",
    logo: "/proxylogo.png",
    href: "https://prxy.health",
    description:
      "I came back to ProxyMedicine and worked deeper across the telehealth platform, shipping urgent care, weight-loss, lab orders, medications, refills, appointments, payment flows, provider workflows, and Alfie, the AI health assistant.",
  },
  {
    period: "2024 - 2025",
    title: "Frontend Engineer",
    company: "Utom",
    mark: "UT",
    accent: "cyan",
    logo: "/utomlogo.png",
    href: "https://utom.dev",
    description:
      "Built developer-facing product pages, responsive interaction flows, reusable UI patterns, and server-connected app interfaces with React, Next.js, and TypeScript.",
  },
  {
    period: "2024",
    title: "Frontend Engineer",
    company: "ProxyMedicine",
    mark: "PX",
    accent: "blue",
    logo: "/proxylogo.png",
    href: "https://prxy.health",
    description:
      "I first joined ProxyMedicine as a starting developer, learning the product surface while contributing to patient dashboards, onboarding flows, appointment experiences, healthcare tasks, and API-connected UI work.",
  },
  {
    period: "2024 - 2026",
    title: "Software Engineer",
    company: "Demz-Aminytics AI",
    mark: "DA",
    accent: "violet",
    logo: "/demzlogo.png",
    description:
      "Delivered client and internal products across healthcare, AI, education, and developer tools with React, Next.js, Vue, Node.js, REST, GraphQL, PostgreSQL, MySQL, and Tailwind CSS.",
  },
  {
    period: "2024 - 2025",
    title: "Fullstack Developer",
    company: "SeaMailer",
    mark: "SE",
    accent: "amber",
    logo: "/seamailerlogo.png",
    href: "https://seamailer.app",
    description:
      "Built email automation workflows, cron-based sequences, event triggers, spam detection, blacklist screening, domain verification, analytics dashboards, and Vue campaign builders.",
  },
  {
    period: "2024 - 2025",
    title: "Frontend Engineer",
    company: "Bloomie",
    mark: "BL",
    accent: "rose",
    logo: "/bloomie.png",
    href: "https://bloomie.com",
    description:
      "Developed an AI-curated learning product for children, focusing on adaptive content discovery, retention-minded learning flows, and playful user-facing interactions.",
  },
  {
    period: "2024",
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    mark: "HA",
    accent: "indigo",
    logo: "/headstarterlogo.png",
    href: "https://www.headstarter.co/",
    description:
      "Built five AI products in five weeks with Next.js, Firebase, Clerk, OpenAI, Pinecone, LangChain, Stripe, and Groq; placed top 3 with a repository review tool.",
  },
  {
    period: "Present",
    title: "Computer Science Student",
    company: "University of Uyo",
    mark: "UU",
    accent: "blue",
    logo: "/universitylogo.png",
    description:
      "Currently studying Computer Science while building production software across fullstack engineering, AI products, healthcare workflows, and developer tools.",
  },
];

export const petProjects = [
  {
    title: "Compiler",
    label: "Language tooling",
    visual: "compiler",
    href: "https://github.com/Sunday012/fplus-compiler",
    code: "tokens -> ast -> checks -> emit",
    description:
      "A compiler project built to understand programming languages from the inside out: lexical analysis, parsing, AST design, semantic validation, error handling, and the translation pipeline from source code into something executable.",
    stack: ["Compiler Design", "Parsing", "AST", "Type Checking"],
  },
  {
    title: "Intersync",
    label: "Go CLI + AI backend",
    visual: "intersync",
    image: "/intersync/wordmark-primary.svg",
    href: "https://github.com/Sunday012/intersync",
    code: "detect -> judge -> generate -> merge -> write",
    description:
      "A developer tool that watches git diffs and turns meaningful code changes into generated learning modules. It includes a Go CLI, hosted backend, provider abstraction, bearer-token auth, embedded frontend, and post-commit hook installation.",
    stack: ["Go", "OpenAI", "net/http", "CLI", "Embedded UI"],
  },
  {
    title: "RAG Support Agent",
    label: "AI customer support",
    visual: "rag",
    code: "index -> retrieve -> answer -> improve",
    description:
      "An interactive customer-support assistant with a custom retrieval pipeline, Pinecone-backed context, and a conversational product surface.",
    stack: ["Next.js", "OpenAI", "Pinecone", "LangChain"],
  },
  {
    title: "SaaS Flashcards",
    label: "AI study product",
    visual: "flashcards",
    code: "prompt -> cards -> review -> upgrade",
    description:
      "A flashcard generator powered by Llama 3.1 through Groq, with authentication, pricing plans, Stripe paywall logic, and a clean study workflow.",
    stack: ["Next.js", "Groq", "Stripe", "Clerk"],
  },
  {
    title: "Repo Review Tool",
    label: "Hackathon top 3",
    visual: "review",
    code: "scan -> score -> explain -> ship",
    description:
      "A GitHub repository review tool built during Headstarter AI, combining static analysis signals with a productized feedback experience.",
    stack: ["GitHub", "SonarQube", "React", "APIs"],
  },
];

export const capabilities = [
  "Healthcare platforms",
  "AI agents",
  "RAG pipelines",
  "AI health assistants",
  "Telemedicine workflows",
  "Lab and medication flows",
  "Authenticated dashboards",
  "RBAC and protected routes",
  "Payment and checkout flows",
  "Email automation systems",
  "Go developer tools",
  "REST and GraphQL APIs",
];

export const developerBooks = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    year: "2017",
    note: "The systems book I would keep close for databases, distributed systems, replication, streams, and the real reasons production data work gets complicated.",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    year: "2017",
    note: "Useful for thinking about boundaries, dependencies, use cases, and codebases that need to survive beyond the first fast implementation.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas and Andrew Hunt",
    year: "1999",
    note: "A practical engineering mindset book: ownership, debugging, sharpening tools, reducing duplication, and becoming the kind of developer teams can trust.",
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    year: "1999",
    note: "A strong companion for improving existing code carefully, especially when a product is already live and the rewrite instinct would be too expensive.",
  },
  {
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    year: "2004",
    note: "For learning how to add tests, isolate behavior, and make confident changes in code that was not originally designed for easy change.",
  },
  {
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    year: "2020",
    note: "A deeper pass through JavaScript itself: scope, closures, objects, async behavior, and the parts of the language frontend engineers trip over most.",
  },
  {
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    year: "2019",
    note: "Helpful for writing TypeScript that actually models the program well, instead of just adding annotations until the compiler goes quiet.",
  },
  {
    title: "Let's Go",
    author: "Alex Edwards",
    year: "2019",
    note: "A practical Go web development book for handlers, middleware, persistence, routing, testing, and the quiet discipline of building small server-side systems.",
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    year: "2021",
    note: "Great for compiler curiosity: lexing, parsing, ASTs, bytecode, VMs, closures, and understanding how programming languages become real tools.",
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal E. Bryant and David R. O'Hallaron",
    year: "2015",
    note: "The kind of systems foundation that makes performance, memory, linking, processes, and low-level debugging feel less mysterious.",
  },
  {
    title: "System Design Interview",
    author: "Alex Xu",
    year: "2020",
    note: "A compact way to practice product-scale architecture: caches, queues, rate limiting, feeds, search, storage, and tradeoffs under constraints.",
  },
  {
    title: "Inspired",
    author: "Marty Cagan",
    year: "2017",
    note: "Good for product taste: discovery, customer problems, empowered teams, and the difference between shipping features and building something people need.",
  },
];

export const miscLinks = [
  {
    before: "The ",
    label: "FPlus compiler",
    href: "https://github.com/Sunday012/fplus-compiler",
    after: " is my language-tooling project.",
  },
  {
    before: "My ",
    label: "Intersync",
    href: "https://github.com/Sunday012/intersync",
    after: " repo is where I explore AI-assisted learning from real code changes.",
  },
  {
    before: "I keep a short list of developer ",
    label: "books",
    href: "/books",
    after: " I think are worth reading slowly.",
  },
  {
    before: "Some of the ",
    label: "music",
    href: "/music",
    after: " I work to lives on its own page too.",
  },
  {
    before: "I also keep a few ",
    label: "movies",
    href: "/movies",
    after: " around for story, taste, and engineering-adjacent inspiration.",
  },
  {
    before: "Most of my public code and experiments are on ",
    label: "GitHub",
    href: profile.github,
    after: ".",
  },
  {
    before: "For work history and professional context, I am also on ",
    label: "LinkedIn",
    href: profile.linkedin,
    after: ".",
  },
  {
    before: "There is a downloadable ",
    label: "resume",
    href: "/favour-sunday-software-engineer-cv.pdf",
    after: " if you want the more formal version.",
  },
];

export const moviePicks = [
  {
    title: "The Social Network",
    director: "David Fincher",
    year: "2010",
    note: "Still one of the sharpest movies about ambition, product instinct, ego, and the strange social weather around building software.",
  },
  {
    title: "The Imitation Game",
    director: "Morten Tyldum",
    year: "2014",
    note: "A dramatized but memorable story about computation, codebreaking, pressure, and the loneliness that can sit near original work.",
  },
  {
    title: "Hidden Figures",
    director: "Theodore Melfi",
    year: "2016",
    note: "Math, systems, excellence, and people doing difficult technical work inside institutions that did not make it easy.",
  },
  {
    title: "Moneyball",
    director: "Bennett Miller",
    year: "2011",
    note: "A product and data movie in disguise: finding signal, trusting models, and changing a system that thinks it already knows everything.",
  },
  {
    title: "Her",
    director: "Spike Jonze",
    year: "2013",
    note: "Useful for thinking about AI interfaces, intimacy, voice, taste, and how software can become emotionally present.",
  },
  {
    title: "Ex Machina",
    director: "Alex Garland",
    year: "2014",
    note: "A clean, unsettling AI story about incentives, evaluation, control, and the danger of mistaking a demo for understanding.",
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    year: "2018",
    note: "Afrofuturism, design, technology, identity, and world-building with real visual confidence.",
  },
  {
    title: "October Sky",
    director: "Joe Johnston",
    year: "1999",
    note: "A sincere builder story: curiosity, experiments, failure, family pressure, and the stubborn joy of making something fly.",
  },
];

export const musicPicks = [
  {
    title: "Made in Lagos",
    artist: "Wizkid",
    year: "2020",
    note: "Smooth, patient, and very Lagos. Good background music when I want to think without rushing.",
  },
  {
    title: "African Giant",
    artist: "Burna Boy",
    year: "2019",
    note: "Big sound, sharp identity, and plenty of range. It feels like ambition with drums under it.",
  },
  {
    title: "Timeless",
    artist: "Davido",
    year: "2023",
    note: "Bright, direct, and full of motion. The kind of project that keeps energy in the room.",
  },
  {
    title: "Boy Alone",
    artist: "Omah Lay",
    year: "2022",
    note: "Melodic and introspective. I like music that can sit with you while you build or debug late.",
  },
  {
    title: "Mr. Money With The Vibe",
    artist: "Asake",
    year: "2022",
    note: "Fast, colorful, and unmistakably Nigerian. Useful for turning a slow work session back on.",
  },
  {
    title: "Rave & Roses",
    artist: "Rema",
    year: "2022",
    note: "Playful, global, and experimental enough to stay interesting after many listens.",
  },
  {
    title: "For Broken Ears",
    artist: "Tems",
    year: "2020",
    note: "Sparse and atmospheric. A strong reminder that restraint can carry more emotion than noise.",
  },
  {
    title: "Get Layd",
    artist: "Omah Lay",
    year: "2020",
    note: "Short, memorable, and beautifully produced. Good music for quiet focus.",
  },
  {
    title: "Apollo",
    artist: "Fireboy DML",
    year: "2020",
    note: "Warm songwriting and clean melodies. I like how polished it feels without losing softness.",
  },
  {
    title: "The Evil Genius",
    artist: "Mr Eazi",
    year: "2023",
    note: "Calm, elegant, and interesting as a full project. Feels especially good for evening work.",
  },
];
