export type ProductKey =
  | "flyst"
  | "nexyst"
  | "chatyst"
  | "canvyst"
  | "flintyst"
  | "postyst"
  | "handyst"
  | "finyst";

export type Product = {
  key: ProductKey;
  name: string;
  category: string;
  tagline: string;
  headline: string;
  emphasis: string;
  description: string;
  appUrl: string;
  foundation: string;
  status: string;
  capabilities: { title: string; body: string; signal: string }[];
  process: { title: string; body: string }[];
  metrics: { value: string; label: string }[];
};

export const products: Record<ProductKey, Product> = {
  flyst: {
    key: "flyst", name: "Flyst", category: "Work orchestration platform",
    tagline: "Plan the work, watch it ship.",
    headline: "Turn strategy into", emphasis: "work that ships.",
    description: "Connect priorities, projects, cycles, work items, and decisions in one operating system for focused delivery.",
    appUrl: "https://flyst.techyst.net/", foundation: "Plane", status: "Workspace ready",
    capabilities: [
      { title: "Portfolio direction", body: "Organize initiatives around a shared view of priority, ownership, health, and progress.", signal: "PORTFOLIO" },
      { title: "Projects and work", body: "Break outcomes into clear work with state, priority, dates, relationships, and accountability.", signal: "DELIVERY" },
      { title: "Cycles and cadence", body: "Plan focused delivery windows and understand progress while scope changes.", signal: "MOMENTUM" },
      { title: "Pages and context", body: "Keep specifications, decisions, notes, and reference material beside the work.", signal: "CONTEXT" },
      { title: "Views and filters", body: "Move between boards, lists, and saved views without duplicating the underlying work.", signal: "FOCUS" },
      { title: "Live analytics", body: "Read cycle progress, work distribution, lead time, and delivery signals from live records.", signal: "INSIGHT" },
    ],
    process: [{ title: "Direction", body: "Set the priority and outcome." }, { title: "Structure", body: "Create the project and plan." }, { title: "Cadence", body: "Commit work to a cycle." }, { title: "Execute", body: "Move every item visibly." }, { title: "Learn", body: "Use signals in the next decision." }],
    metrics: [{ value: "01", label: "shared delivery system" }, { value: "Live", label: "portfolio visibility" }, { value: "∞", label: "projects and work items" }],
  },
  nexyst: {
    key: "nexyst", name: "Nexyst", category: "Enterprise resource planning",
    tagline: "Run the whole business on one record.",
    headline: "One system to run", emphasis: "the whole business.",
    description: "Connect finance, inventory, sales, purchasing, manufacturing, projects, assets, and people in one operational record.",
    appUrl: "https://nexyst.techyst.net/app", foundation: "ERPNext", status: "ERP ready",
    capabilities: [
      { title: "Finance and accounting", body: "Ledgers, receivables, payables, budgets, assets, taxes, and reporting in one system.", signal: "FINANCE" },
      { title: "Inventory and fulfillment", body: "Manage items, warehouses, batches, serial numbers, movement, and delivery records.", signal: "SUPPLY" },
      { title: "Sales and CRM", body: "Move from lead and opportunity through quotation, order, delivery, and invoice.", signal: "REVENUE" },
      { title: "Buying and suppliers", body: "Control requests, quotations, purchase orders, receipts, and supplier invoices.", signal: "PROCURE" },
      { title: "Manufacturing", body: "Connect bills of materials, operations, work orders, capacity, and production plans.", signal: "PRODUCE" },
      { title: "People and projects", body: "Coordinate employee records, expenses, projects, timesheets, costing, and service.", signal: "OPERATE" },
    ],
    process: [{ title: "Demand", body: "Qualify the opportunity." }, { title: "Commit", body: "Confirm order and terms." }, { title: "Fulfill", body: "Move and deliver inventory." }, { title: "Recognize", body: "Post the invoice." }, { title: "Settle", body: "Allocate cash and close." }],
    metrics: [{ value: "01", label: "connected data model" }, { value: "360°", label: "operational visibility" }, { value: "24/7", label: "business control" }],
  },
  chatyst: {
    key: "chatyst", name: "Chatyst", category: "Customer conversation platform",
    tagline: "Every customer conversation, one inbox.",
    headline: "Turn every conversation into", emphasis: "customer momentum.",
    description: "Bring support, sales, and success together across chat, email, messaging, contacts, automation, and reporting.",
    appUrl: "https://chatyst.techyst.net/app/login", foundation: "Chatwoot", status: "Inboxes online",
    capabilities: [
      { title: "Omnichannel inbox", body: "Bring website chat, email, WhatsApp, social messaging, SMS, and API inboxes together.", signal: "CHANNELS" },
      { title: "Customer context", body: "Keep identity, attributes, history, notes, labels, and activity beside every conversation.", signal: "CONTEXT" },
      { title: "Team collaboration", body: "Assign ownership, mention teammates, use private notes, and coordinate resolution.", signal: "TEAMWORK" },
      { title: "Automation", body: "Route, assign, label, notify, and follow up through dependable conversation rules.", signal: "FLOW" },
      { title: "Help center", body: "Publish useful answers and give customers a faster path to resolution.", signal: "SELF-SERVE" },
      { title: "Service reporting", body: "Understand demand, response, resolution, workload, inboxes, and team performance.", signal: "INSIGHT" },
    ],
    process: [{ title: "Listen", body: "Receive every channel." }, { title: "Understand", body: "See the full customer context." }, { title: "Own", body: "Route to the right team." }, { title: "Serve", body: "Collaborate and resolve." }, { title: "Learn", body: "Improve from service signals." }],
    metrics: [{ value: "01", label: "customer conversation record" }, { value: "All", label: "channels in one inbox" }, { value: "Live", label: "service intelligence" }],
  },
  canvyst: {
    key: "canvyst", name: "Canvyst", category: "Docs and canvas workspace",
    tagline: "Documents and canvas on the same page.",
    headline: "Write it down.", emphasis: "Then draw it out.",
    description: "Put documents and an infinite canvas on the same page. Plan in prose, think in diagrams, and keep every idea connected.",
    appUrl: "https://canvyst.techyst.net/", foundation: "AFFiNE", status: "Workspace synced",
    capabilities: [
      { title: "Block editor", body: "Create structured notes, plans, specifications, tables, code, media, and references.", signal: "WRITE" },
      { title: "Infinite canvas", body: "Arrange notes, shapes, documents, diagrams, and relationships across open space.", signal: "THINK" },
      { title: "Live collaboration", body: "Work together with presence, comments, history, and synchronized changes.", signal: "CREATE" },
      { title: "Linked knowledge", body: "Move between linear documents and spatial thinking without creating disconnected copies.", signal: "CONNECT" },
      { title: "Local-first sync", body: "Keep work responsive and reconcile updates when the connection returns.", signal: "SYNC" },
      { title: "Shared workspaces", body: "Organize members, permissions, pages, and shared knowledge in one place.", signal: "SHARE" },
    ],
    process: [{ title: "Capture", body: "Get the raw thought down." }, { title: "Arrange", body: "Find structure on canvas." }, { title: "Write", body: "Turn it into a document." }, { title: "Review", body: "Bring collaborators in." }, { title: "Share", body: "Publish one current version." }],
    metrics: [{ value: "02", label: "thinking modes together" }, { value: "Live", label: "multiplayer editing" }, { value: "∞", label: "room for every idea" }],
  },
  flintyst: {
    key: "flintyst", name: "Flintyst", category: "Connected knowledge search",
    tagline: "Ask your company what it already knows.",
    headline: "Every answer your company", emphasis: "already has.",
    description: "Connect the tools your work lives in and answer questions from them directly, with the source attached and source permissions respected.",
    appUrl: "https://flintyst.techyst.net/", foundation: "Onyx", status: "Index current",
    capabilities: [
      { title: "Connected sources", body: "Sync documents, messages, tickets, wikis, and code from the tools already in use.", signal: "CONNECT" },
      { title: "Natural-language answers", body: "Ask a real question and get a direct answer assembled from the underlying documents.", signal: "ASK" },
      { title: "Citations", body: "Every answer carries the passages behind it, so any claim can be traced to a source.", signal: "VERIFY" },
      { title: "Custom assistants", body: "Scope an assistant to a set of documents and a role, rather than one chatbot for everything.", signal: "ASSIST" },
      { title: "Permission-aware retrieval", body: "Results honour each source's access rules, per person, on every query.", signal: "ACCESS" },
      { title: "Self-hosted", body: "Run the index, the embeddings, and the model layer on infrastructure you control.", signal: "CONTROL" },
    ],
    process: [{ title: "Connect", body: "Sync the sources you use." }, { title: "Index", body: "Make meaning searchable." }, { title: "Retrieve", body: "Find the passages that bear." }, { title: "Answer", body: "Explain from those passages." }, { title: "Verify", body: "Check against the citation." }],
    metrics: [{ value: "01", label: "question, every source" }, { value: "Cited", label: "answers by default" }, { value: "Live", label: "index across tools" }],
  },
  postyst: {
    key: "postyst", name: "Postyst", category: "Social publishing platform",
    tagline: "Draft once, publish everywhere.",
    headline: "Plan the whole calendar.", emphasis: "Publish everywhere.",
    description: "Draft once, schedule across every channel, and keep the whole team's publishing calendar in one place.",
    appUrl: "https://postyst.techyst.net/", foundation: "Postiz", status: "Channels connected",
    capabilities: [
      { title: "One composer", body: "Write a post once and adapt it per network without rewriting it from scratch.", signal: "COMPOSE" },
      { title: "Shared calendar", body: "See everything scheduled across every channel on a single timeline.", signal: "PLAN" },
      { title: "Every major channel", body: "Connect the networks the team actually publishes to and post to them together.", signal: "REACH" },
      { title: "Approvals", body: "Route drafts for review before anything reaches a public account.", signal: "REVIEW" },
      { title: "Performance", body: "Read what each post did after it went out, per channel and per campaign.", signal: "MEASURE" },
      { title: "Automation and API", body: "Queue, repeat, and integrate publishing with the rest of your stack.", signal: "AUTOMATE" },
    ],
    process: [{ title: "Draft", body: "Write the post once." }, { title: "Adapt", body: "Shape it per channel." }, { title: "Schedule", body: "Place it on the calendar." }, { title: "Publish", body: "Ship to every account." }, { title: "Learn", body: "Read what it did." }],
    metrics: [{ value: "01", label: "calendar for every channel" }, { value: "Live", label: "publishing pipeline" }, { value: "\u221e", label: "scheduled posts" }],
  },
  handyst: {
    key: "handyst", name: "Handyst", category: "AI software agent",
    tagline: "Describe the change, review the pull request.",
    headline: "Describe the change.", emphasis: "Get the pull request.",
    description: "An AI agent that reads your codebase, writes the change, runs the tests, and opens the pull request for review.",
    appUrl: "https://handyst.techyst.net/", foundation: "OpenHands", status: "Agent ready",
    capabilities: [
      { title: "Reads the repository", body: "Works from the code as it actually is, not from a description of it.", signal: "CONTEXT" },
      { title: "Writes and edits", body: "Makes the change across the files it touches, not one snippet at a time.", signal: "BUILD" },
      { title: "Runs commands", body: "Executes builds, tests, and tooling in a sandbox, then reacts to the output.", signal: "EXECUTE" },
      { title: "Opens pull requests", body: "Hands work back the way your team already reviews it.", signal: "DELIVER" },
      { title: "Isolated runtime", body: "Every session runs in its own container, so an agent cannot reach past its task.", signal: "CONTAIN" },
      { title: "Self-hosted", body: "Run the agent and its runtime on infrastructure you control.", signal: "CONTROL" },
    ],
    process: [{ title: "Describe", body: "State the change in plain words." }, { title: "Explore", body: "The agent reads the code." }, { title: "Change", body: "It edits across the repo." }, { title: "Verify", body: "It runs the tests." }, { title: "Review", body: "You get a pull request." }],
    metrics: [{ value: "01", label: "sandbox per session" }, { value: "PR", label: "shaped output" }, { value: "Any", label: "language in the repo" }],
  },
  finyst: {
    key: "finyst", name: "Finyst", category: "Payments orchestration",
    tagline: "One integration, every processor.",
    headline: "Route every payment", emphasis: "to whoever should take it.",
    description: "Connect once, then route, retry and reconcile payments across every processor from a single control plane.",
    appUrl: "https://finyst.techyst.net/", foundation: "Hyperswitch", status: "Processors connected",
    capabilities: [
      { title: "One integration", body: "Connect to many processors through a single API instead of rebuilding per provider.", signal: "CONNECT" },
      { title: "Smart routing", body: "Send each payment to the processor best placed to authorise it, by rule or by volume.", signal: "ROUTE" },
      { title: "Automatic retries", body: "Recover a declined payment on another processor rather than losing the sale.", signal: "RECOVER" },
      { title: "Unified reporting", body: "Read authorisation, settlement and refund data across providers in one place.", signal: "MEASURE" },
      { title: "Vaulting", body: "Store payment methods once and reuse them across processors without re-collecting.", signal: "VAULT" },
      { title: "Self-hosted", body: "Run the payment path on infrastructure you control, with your own database.", signal: "CONTROL" },
    ],
    process: [{ title: "Connect", body: "Add your processors." }, { title: "Route", body: "Decide who takes each payment." }, { title: "Authorise", body: "Collect through one API." }, { title: "Retry", body: "Recover the declines." }, { title: "Reconcile", body: "Settle against one ledger." }],
    metrics: [{ value: "01", label: "integration, many processors" }, { value: "Live", label: "routing decisions" }, { value: "PCI", label: "scope kept contained" }],
  },
};
