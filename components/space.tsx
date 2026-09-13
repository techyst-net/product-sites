import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

const order: Product[] = [
  products.nexyst,
  products.flyst,
  products.chatyst,
  products.canvyst,
  products.flintyst,
];

export function Space() {
  return <main className="space">
    <header className="nav shell">
      <Link className="brand" href="/" aria-label="Techyst home">
        <span>Techyst</span>
      </Link>
      <nav aria-label="Primary navigation">
        <a href="#apps">Apps</a>
        <a href="#approach">Approach</a>
        <a href="mailto:sales@techyst.net">Contact</a>
      </nav>
      <a className="navCta" href="#apps">Browse the apps <span>↓</span></a>
    </header>

    <section className="spaceHero shell">
      <p className="eyebrow"><i />Techyst — the whole workspace</p>
      <h1>Five tools. One stack. <em>All yours.</em></h1>
      <p>
        Resource planning, delivery, customer conversations, documents and search — each
        a serious product in its own right, each self-hosted on infrastructure you control.
      </p>
      <div className="constellation">
        {order.map((product) => (
          <a key={product.key} href={`/${product.key}`}>
            <Image src={`/marks/${product.key}.png`} alt="" width={22} height={22} />
            {product.name}
          </a>
        ))}
      </div>
    </section>

    <section className="section shell" id="apps" style={{ paddingTop: 24 }}>
      <div className="sectionHead">
        <p><span>01</span> The apps</p>
        <div>
          <h2>Pick the surface<br />the work actually needs.</h2>
          <p>Every product runs standalone and shares the same operating philosophy: open foundations, your own infrastructure, no per-seat tax on growing.</p>
        </div>
      </div>
      <div className="appGrid">
        {order.map((product) => (
          <Link key={product.key} className={`appCard ${product.key}`} href={`/${product.key}`}>
            <div className="appCardTop">
              <Image src={`/marks/${product.key}.png`} alt="" width={38} height={38} />
              <span>{product.status}</span>
            </div>
            <h3>{product.name}</h3>
            <small>{product.category}</small>
            <p>{product.tagline}</p>
            <div className="appCardFoot">
              <span>Built on {product.foundation}</span>
              <b>Explore ↗</b>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="dark" id="approach">
      <div className="shell">
        <div className="sectionHead inverse">
          <p><span>02</span> The approach</p>
          <div>
            <h2>Open foundations,<br />run on your terms.</h2>
            <p>Each Techyst product is built on a mature open-source project and deployed as a first-class product — branded, maintained, and operated end to end.</p>
          </div>
        </div>
        <div className="process">
          {[
            { title: "Own it", body: "Your data sits on your infrastructure, not a vendor's." },
            { title: "Open core", body: "Every product stands on a proven open-source foundation." },
            { title: "One family", body: "Shared design language across every surface your team touches." },
            { title: "No seat tax", body: "Add people without a pricing conversation every quarter." },
            { title: "Real support", body: "One team behind the whole stack, not five vendors." },
          ].map((item, index) => (
            <article key={item.title}>
              <small>0{index + 1}</small>
              <i />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section shell">
      <div className="statement">
        <p>One stack</p>
        <h2>Software you run,<br /><em>not software you rent.</em></h2>
        <span>Start with the one product that solves today&apos;s problem. Add the rest when the work asks for them.</span>
      </div>
      <div className="spaceNote">
        <article>
          <h3>Self-hosted by default</h3>
          <p>Every service runs on infrastructure under your control, with your own backups and your own retention rules.</p>
        </article>
        <article>
          <h3>Connected, not coupled</h3>
          <p>Products share a design language and an account model, but any one of them stands alone if that is all you need.</p>
        </article>
        <article>
          <h3>Built to be lived in</h3>
          <p>These are day-long tools for operating teams, not dashboards that get opened once a quarter.</p>
        </article>
      </div>
    </section>

    <section className="closing">
      <div className="shell">
        <p>Techyst</p>
        <h2>Start with one.<br />Grow into the stack.</h2>
        <a className="primary" href="#apps">See the apps <span>↓</span></a>
      </div>
    </section>

    <footer>
      <div className="shell footerGrid">
        <div className="footerBrand">
          <div className="brand"><span>Techyst</span></div>
          <p>Self-hosted software for teams that want to own their operations.</p>
        </div>
        <div>
          <h3>Apps</h3>
          {order.map((product) => <a key={product.key} href={`/${product.key}`}>{product.name}</a>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:sales@techyst.net">Sales</a>
          <a href="mailto:support@techyst.net">Support</a>
        </div>
        <div>
          <h3>Operations</h3>
          <span>Self-hosted deployment</span>
          <span>Open-source foundations</span>
          <span>© 2026 Techyst</span>
        </div>
      </div>
      <div className="giantWord">Techyst</div>
    </footer>
  </main>;
}
