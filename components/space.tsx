import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

const order: Product[] = [
  products.nexyst,
  products.flyst,
  products.chatyst,
  products.canvyst,
  products.flintyst,
  products.postyst,
  products.handyst,
];

const MAIN_SITE = "https://www.techyst.net";

export function Space() {
  return <main className="space">
    <SpaceHeader />
    <SpaceHero />
    <MarkStrip />
    <SpaceMetrics />
    {order.map((product, index) => (
      <ProductFeature key={product.key} product={product} index={index} />
    ))}
    <WhySection />
    <ProcessSection />
    <Faq />
    <ClosingCta />
    <SpaceFooter />
  </main>;
}

/* ------------------------------------------------------------------ chrome */

function SpaceHeader() {
  return (
    <header className="spaceNav">
      <div className="shell spaceNavInner">
        <Link href="/" className="spaceLogo" aria-label="Techyst">
          <Image src="/brand/techyst-logo.svg" alt="Techyst" width={132} height={26} priority />
          <span>Space</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#why">Why self-hosted</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
          <a href={MAIN_SITE}>Techyst.net ↗</a>
        </nav>
        <a className="navCta" href="mailto:team@techyst.net">Talk to us</a>
      </div>
    </header>
  );
}

function SpaceHero() {
  return (
    <section className="spaceHero">
      <div className="shell">
        <p className="eyebrow"><i />The Techyst product family</p>
        <h1>Seven products your team<br /><em>actually owns.</em></h1>
        <p className="spaceLede">
          Resource planning, delivery, customer conversations, documents, search,
          social publishing, and software agents.
          Each one a serious product. All of them running on infrastructure you control,
          with no per-seat licence growing underneath you.
        </p>
        <div className="actions">
          <a className="primary" href="#products">Explore the products <span>↓</span></a>
          <a className="secondary" href="mailto:team@techyst.net">Book a walkthrough</a>
        </div>
        <HeroWindow />
      </div>
    </section>
  );
}

// A composed application window rather than a screenshot, so the hero stays
// honest about being an illustration while still showing the shape of the suite.
function HeroWindow() {
  return (
    <div className="heroWindow">
      <div className="heroWindowBar">
        <span><i /><i /><i /></span>
        <small>techyst — workspace</small>
        <b>7 products connected</b>
      </div>
      <div className="heroWindowBody">
        <aside>
          {order.map((product, index) => (
            <span key={product.key} className={index === 0 ? "selected" : ""}>
              <Image src={`/marks/${product.key}.png`} alt="" width={18} height={18} />
              {product.name}
            </span>
          ))}
        </aside>
        <div className="heroWindowMain">
          {order.map((product) => (
            <article key={product.key} className={product.key}>
              <Image src={`/marks/${product.key}.png`} alt="" width={30} height={30} />
              <b>{product.name}</b>
              <small>{product.category}</small>
              <span className="bar"><i /></span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarkStrip() {
  return (
    <section className="markStrip">
      <div className="shell">
        <p>One family, seven surfaces</p>
        <div>
          {order.map((product) => (
            <a key={product.key} href={`#${product.key}`}>
              <Image src={`/marks/${product.key}.png`} alt="" width={26} height={26} />
              {product.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpaceMetrics() {
  const metrics = [
    { value: "07", label: "products in the family" },
    { value: "100%", label: "self-hosted, your infrastructure" },
    { value: "0", label: "per-seat licences" },
  ];
  return (
    <section className="metricBand">
      <div className="shell metrics">
        {metrics.map((metric) => (
          <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- products */

function ProductFeature({ product, index }: { product: Product; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <section
      className={`productFeature ${product.key} ${flipped ? "flipped" : ""}`}
      id={index === 0 ? "products" : product.key}
    >
      <div className="shell productFeatureGrid">
        <div className="productCopy">
          <div className="productBadge">
            <Image src={`/marks/${product.key}.png`} alt="" width={44} height={44} />
            <div>
              <b>{product.name}</b>
              <small>{product.category}</small>
            </div>
          </div>
          <h2>{product.headline} <em>{product.emphasis}</em></h2>
          <p>{product.description}</p>
          <ul className="productList">
            {product.capabilities.slice(0, 4).map((cap) => (
              <li key={cap.title}><b>{cap.title}</b>{cap.body}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="primary" href={`/${product.key}`}>See {product.name} <span>↗</span></Link>
            <span className="productFoundation">Built on {product.foundation}</span>
          </div>
        </div>
        <ProductPanel product={product} />
      </div>
    </section>
  );
}

function ProductPanel({ product }: { product: Product }) {
  return (
    <div className="productPanel">
      <div className="productPanelBar">
        <span><i /><i /><i /></span>
        <small>{product.name.toLowerCase()}.techyst.net</small>
        <b><i />{product.status}</b>
      </div>
      <div className="productPanelBody">
        <div className="productPanelHead">
          <div>
            <small>{product.category.toUpperCase()}</small>
            <h3>{product.name} overview</h3>
          </div>
          <button>＋ New</button>
        </div>
        <div className="productPanelStats">
          {product.metrics.map((metric) => (
            <article key={metric.label}>
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <span className="bar"><i /></span>
            </article>
          ))}
        </div>
        <div className="productPanelRows">
          {product.capabilities.slice(0, 5).map((cap) => (
            <p key={cap.title}>
              <span className="dot">{cap.title.charAt(0)}</span>
              <b>{cap.title}</b>
              <em>{cap.signal}</em>
            </p>
          ))}
        </div>
        <p className="disclaimer">Illustrative product data</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- content */

const reasons = [
  {
    image: "/scenes/build.png",
    title: "Built on foundations that outlive vendors",
    body: "Every product stands on a mature open-source project — ERPNext, Plane, Chatwoot, AFFiNE, Onyx — so the thing you depend on cannot be discontinued out from under you.",
  },
  {
    image: "/scenes/host.webp",
    title: "Your data stays on your infrastructure",
    body: "Databases, files, search indexes and models run where you put them. Your backups, your retention rules, your compliance story.",
  },
  {
    image: "/scenes/automate.png",
    title: "One design language across every surface",
    body: "Shared typography, colour and layout mean people moving between products are never relearning an interface from scratch.",
  },
  {
    image: "/scenes/scale.webp",
    title: "Add people without a pricing conversation",
    body: "Growth costs you compute, not licences. Onboard the whole team the week you hire them.",
  },
];

function WhySection() {
  return (
    <section className="section shell" id="why">
      <div className="sectionHead">
        <p><span>01</span> Why own the stack</p>
        <div>
          <h2>Software you run,<br />not software you rent.</h2>
          <p>Most teams end up renting disconnected SaaS products, paying per seat, and storing their operating history on someone else&apos;s servers. This is the other option.</p>
        </div>
      </div>
      <div className="reasonGrid">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <div className="reasonImage">
              <Image src={reason.image} alt="" width={640} height={360} />
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { title: "Choose", body: "Start with the one product that solves this quarter's problem." },
    { title: "Deploy", body: "We stand it up on your infrastructure and connect your identity provider." },
    { title: "Migrate", body: "Your existing records move across, with the history intact." },
    { title: "Operate", body: "Your team works in it daily; we keep it patched and current." },
    { title: "Expand", body: "Add the next product when the work asks for it, not before." },
  ];
  return (
    <section className="dark" id="how">
      <div className="shell">
        <div className="sectionHead inverse">
          <p><span>02</span> How it works</p>
          <div>
            <h2>From first product<br />to full operating stack.</h2>
            <p>Nothing here requires a big-bang migration. Each product earns its place before the next one arrives.</p>
          </div>
        </div>
        <div className="process">
          {steps.map((step, index) => (
            <article key={step.title}>
              <small>0{index + 1}</small>
              <i />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do I have to take all seven?",
    a: "No. Each product runs standalone and is useful on its own. Most teams start with one and add the next when a real need shows up.",
  },
  {
    q: "Where does everything run?",
    a: "On infrastructure you control — your cloud account or your own hardware. We deploy and maintain it; the data never leaves your environment.",
  },
  {
    q: "What happens to my data if we stop working together?",
    a: "It stays exactly where it is. These are open-source foundations on your servers, so there is no export process and no hostage situation.",
  },
  {
    q: "How is this priced?",
    a: "Deployment and ongoing maintenance, not per seat. Adding the hundredth user costs the same as adding the tenth.",
  },
  {
    q: "Can it connect to the tools we already use?",
    a: "Yes. Each foundation ships a real API and the usual integrations, and Flintyst is built specifically to index the tools your work already lives in.",
  },
  {
    q: "Who keeps it updated?",
    a: "We do. Upstream releases are tracked, tested against your deployment, and rolled out on a schedule you agree to.",
  },
];

function Faq() {
  return (
    <section className="section shell" id="faq">
      <div className="sectionHead">
        <p><span>03</span> Questions</p>
        <div>
          <h2>The things<br />everyone asks first.</h2>
        </div>
      </div>
      <div className="faqGrid">
        {faqs.map((item) => (
          <article key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="spaceClosing">
      <div className="shell">
        <p>Techyst Space</p>
        <h2>Start with one.<br />Grow into the stack.</h2>
        <p className="spaceClosingLede">Tell us what is slowing the team down and we will tell you which of the seven actually helps — or whether none of them do.</p>
        <div className="actions">
          <a className="primary" href="mailto:team@techyst.net">Book a walkthrough <span>↗</span></a>
          <a className="secondary" href="#products">Browse the products</a>
        </div>
      </div>
    </section>
  );
}

function SpaceFooter() {
  return (
    <footer>
      <div className="shell footerGrid">
        <div className="footerBrand">
          <Image src="/brand/techyst-logo-white.svg" alt="Techyst" width={150} height={30} />
          <p>Self-hosted software for teams that want to own their operations.</p>
        </div>
        <div>
          <h3>Products</h3>
          {order.map((product) => <Link key={product.key} href={`/${product.key}`}>{product.name}</Link>)}
        </div>
        <div>
          <h3>Techyst</h3>
          <a href={MAIN_SITE}>Main site ↗</a>
          <a href={`${MAIN_SITE}/contact-us`}>Contact ↗</a>
        </div>
        <div>
          <h3>Operations</h3>
          <a href="mailto:team@techyst.net">team@techyst.net</a>
          <a href="mailto:support@techyst.net">support@techyst.net</a>
          <span>© 2026 Techyst</span>
        </div>
      </div>
      <div className="giantWord">Techyst</div>
    </footer>
  );
}
