export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  isoDate: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rbac-permissions-and-scopes",
    title: "RBAC is not enough: roles, permissions, and scopes",
    excerpt:
      "A practical model for authorization that separates what someone can do from exactly where they are allowed to do it.",
    category: "Backend",
    publishedAt: "October 4, 2026",
    isoDate: "2026-10-04",
    readTime: "8 min read",
    sections: [
      {
        heading: "A role is only the starting point",
        paragraphs: [
          "Role-based access control is attractive because it gives the system a small vocabulary. A user is an admin, provider, support agent, or patient, and each role receives a known set of permissions. That is a good foundation, but production authorization rarely stops there.",
          "The difficult questions are contextual. Can this provider view every patient or only patients assigned to them? Can a support agent issue a refund in every organization? Can an administrator edit their own permissions? A role can tell us what kind of work a person does, but not always the boundary around that work.",
        ],
      },
      {
        heading: "Separate roles, permissions, and scopes",
        paragraphs: [
          "I find authorization easier to reason about when three ideas stay separate. Roles are convenient bundles. Permissions describe actions. Scopes describe the resources or boundaries within which those actions are valid.",
        ],
        bullets: [
          "Role: provider, organization admin, support agent, patient",
          "Permission: appointment.read, prescription.create, billing.refund",
          "Scope: own record, assigned patients, one organization, all organizations",
        ],
      },
      {
        heading: "Make every decision answer the same question",
        paragraphs: [
          "A useful authorization check can be expressed as: may this actor perform this action on this resource in this context? The actor supplies identity and memberships. The action maps to a permission. The resource supplies ownership and tenancy. The context can include assignment, organization, workflow state, or another policy input.",
          "This shape is more durable than scattering checks like isAdmin throughout the application. It also produces better tests because each policy can be exercised with explicit actors, actions, resources, and boundaries.",
        ],
      },
      {
        heading: "Enforce the boundary where the data lives",
        paragraphs: [
          "Hiding a button is useful interface feedback, not security. The server must make the final decision, and the data query should be constrained by the same scope whenever possible. If a user is restricted to one organization, the organization boundary belongs in the query rather than in a filter applied after data has already been loaded.",
          "This matters even more for list endpoints. Checking access to the route without scoping the returned rows can expose an entire dataset through a perfectly legitimate request.",
        ],
      },
      {
        heading: "Design for change and auditability",
        paragraphs: [
          "Permissions should be stable capabilities, while roles can evolve as product responsibilities change. Keeping that distinction makes it possible to create a new role by composing existing permissions instead of rewriting authorization logic.",
          "Sensitive decisions should also leave an audit trail: who acted, which permission allowed it, what resource was affected, and when it happened. Authorization tells the system whether an action may occur. Auditing helps the team understand what actually occurred afterward.",
        ],
      },
      {
        heading: "The practical rule",
        paragraphs: [
          "Use roles to make permissions manageable, permissions to name allowed actions, and scopes to keep those actions inside the correct boundary. Apply the same policy on the server, constrain the underlying data access, and treat the client as an explanation of the policy rather than its enforcement point.",
        ],
      },
    ],
  },
  {
    slug: "building-fplus-compiler",
    title: "Building FPlus: what a compiler teaches you about software",
    excerpt:
      "A walkthrough of the compiler pipeline—from tokens and syntax trees to semantic checks, useful errors, and emitted output.",
    category: "Compilers",
    publishedAt: "October 3, 2026",
    isoDate: "2026-10-03",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why build a compiler",
        paragraphs: [
          "I started FPlus to understand programming languages from the inside out. A compiler takes something that feels expressive and flexible to a person, then moves it through a sequence of increasingly precise representations until a machine can do something with it.",
          "That makes compiler work a concentrated lesson in software design. Every stage needs a clear contract, errors need context, and decisions made early in the pipeline shape everything that follows.",
        ],
      },
      {
        heading: "The pipeline is the architecture",
        paragraphs: [
          "The core flow is simple to describe: source becomes tokens, tokens become an abstract syntax tree, the tree is validated, and valid programs are emitted into a lower-level form. The interesting work lives inside the boundaries between those stages.",
        ],
        bullets: [
          "Lexing turns characters into meaningful tokens.",
          "Parsing turns the token stream into a structured syntax tree.",
          "Semantic analysis checks names, types, and rules that grammar alone cannot express.",
          "Emission translates a valid program into its target representation.",
        ],
      },
      {
        heading: "Tokens make the source manageable",
        paragraphs: [
          "The lexer is the first place raw text gains meaning. Keywords, identifiers, operators, literals, and punctuation become distinct token types with source positions. Those positions are not decorative metadata; they are what later stages need to point back to the exact place where a problem began.",
          "A good lexer also makes ambiguity explicit. It has to decide whether two characters form one operator, when a number ends, and how comments or whitespace affect position tracking without affecting the program itself.",
        ],
      },
      {
        heading: "The AST should represent meaning, not punctuation",
        paragraphs: [
          "Parsing is where a flat stream becomes a hierarchy. Operator precedence, blocks, function calls, declarations, and expressions become nodes in an abstract syntax tree. The useful word is abstract: the tree should preserve the program's structure without carrying every piece of punctuation from the source.",
          "Once the tree is clean, later passes become easier to write. A type checker can visit expression nodes instead of reinterpreting tokens, and an emitter can focus on meaning instead of syntax trivia.",
        ],
      },
      {
        heading: "Syntax is not the same as correctness",
        paragraphs: [
          "A parser can confirm that a program has the right shape, but it cannot prove that every name exists or every value is used correctly. Semantic analysis handles those rules. It builds and consults symbol information, checks types, and reports conflicts that only become visible once different parts of the program are connected.",
          "This stage taught me to prefer explicit passes over one large function that tries to understand everything at once. Separate passes are easier to test, easier to explain, and easier to extend when the language grows.",
        ],
      },
      {
        heading: "Errors are part of the language experience",
        paragraphs: [
          "A compiler is often experienced through its failures. An accurate message with a useful source location can turn a broken program into a quick correction. A vague message can make even a small language feel hostile.",
          "Building FPlus reinforced a broader product lesson: developer tools need interface design too. Their interface happens to be tokens, diagnostics, commands, and output, but clarity still determines whether the tool feels trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "what-i-want-to-write-about-here",
    title: "What I want to write about here",
    excerpt:
      "A home for practical notes from building fullstack products, AI systems, developer tools, and software that has to work beyond the demo.",
    category: "Notes",
    publishedAt: "October 2, 2026",
    isoDate: "2026-10-02",
    readTime: "3 min read",
    sections: [
      {
        heading: "Working notes, not polished theory",
        paragraphs: [
          "This blog is where I will write down the lessons that are easiest to lose between shipping one feature and starting the next. I want it to be practical: what I tried, what broke, what changed my mind, and what I would do differently the next time.",
          "Most posts will begin with real engineering work. That might be a compiler experiment, a healthcare workflow, an AI integration, or a small interface detail that took more thought than its final shape suggests.",
        ],
      },
      {
        heading: "The subjects I keep returning to",
        paragraphs: [
          "My work moves between product surfaces and the systems underneath them, so the writing here will do the same.",
        ],
        bullets: [
          "Go, TypeScript, React, and Next.js in production",
          "AI agents, retrieval pipelines, and useful product integrations",
          "Healthcare flows, permissions, payments, and protected data",
          "Compilers, developer tools, and learning by building",
          "Interface decisions that make complicated systems feel clear",
        ],
      },
      {
        heading: "Why write in public",
        paragraphs: [
          "Writing forces an idea to become more precise. It exposes the gaps that are easy to miss when something only exists in code or in my head. If a post helps another builder avoid a dead end—or gives us something worth disagreeing about—it has done its job.",
          "This is the first note. More will follow as the work does.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
