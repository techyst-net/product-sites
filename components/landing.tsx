import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

const icons = ["↗", "◇", "◎", "⌁", "◫", "▦"];

export function Landing({ product }: { product: Product }) {
  return <main className={`site ${product.key}`}>
    <header className="nav shell">
      <Link className="brand" href={`/${product.key}`} aria-label={`${product.name} home`}>
        <span className="brandWordmark">
          <Image src={`/wordmarks/${product.key}.png`} alt={`${product.name} logo`} fill sizes="172px" preload />
        </span>
      </Link>
      <nav aria-label="Primary navigation"><a href="/">Techyst</a><a href="#platform">Platform</a><a href="#capabilities">Capabilities</a><a href="#workflow">How it works</a><a href="#control">Control</a></nav>
      <a className="navCta" href={product.appUrl}>Open {product.name} <span>↗</span></a>
    </header>

    <section className="hero" id="platform"><div className="shell heroGrid">
      <div className="heroCopy"><p className="eyebrow"><i />{product.category}</p><h1>{product.headline}<br/><em>{product.emphasis}</em></h1><p className="lede">{product.description}</p><div className="actions"><a className="primary" href={product.appUrl}>Enter {product.name} <span>↗</span></a><a className="secondary" href="#capabilities">Explore the platform</a></div><div className="heroProof"><span><b>Built on {product.foundation}</b>Open-source foundation</span><span><b>Self-hosted</b>Operational control</span></div></div>
      <ProductConsole product={product} />
    </div></section>

    <section className="metricBand"><div className="shell metrics">{product.metrics.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>

    <section className="section shell" id="capabilities"><div className="sectionHead"><p><span>01</span> Platform depth</p><div><h2>Built for the work<br/>behind the outcome.</h2><p>Give every team a serious operating surface while leaders retain a complete view of progress, responsibility, and context.</p></div></div><div className="capGrid">{product.capabilities.map((cap, index) => <article key={cap.title}><div className="capTop"><small>{String(index + 1).padStart(2, "0")}</small><b>{icons[index]}</b></div><h3>{cap.title}</h3><p>{cap.body}</p><span>{cap.signal}</span></article>)}</div></section>

    <section className="dark" id="workflow"><div className="shell"><div className="sectionHead inverse"><p><span>02</span> Operating continuity</p><div><h2>Every handoff keeps<br/>its context.</h2><p>Move from first signal to measurable result through one visible, accountable operating flow.</p></div></div><div className="process">{product.process.map((step, index) => <article key={step.title}><small>0{index + 1}</small><i /><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>

    <section className="section shell"><div className="statement"><p>One shared system</p><h2>Operate in detail.<br/><em>Lead with perspective.</em></h2><span>{product.description}</span></div><div className="operatingView"><div className="viewNav"><small>{product.name.toUpperCase()} / OPERATING VIEW</small>{product.capabilities.slice(0,4).map((cap,index)=><button className={index===0?"active":""} key={cap.title}>{cap.title}<span>0{index+1}</span></button>)}</div><div className="viewPanel"><div className="viewTitle"><div><small>LIVE WORKSPACE</small><h3>Operational overview</h3></div><span className="live"><i />{product.status}</span></div><div className="signalGrid">{product.capabilities.slice(0,6).map((cap,index)=><article key={cap.title}><small>{cap.signal}</small><strong>{index % 2 ? `${68 + index * 3}%` : `${12 + index * 19}`}</strong><p>{index % 2 ? "within operating target" : "active records in view"}</p><span><i style={{width:`${45 + index * 8}%`}} /></span></article>)}</div><p className="disclaimer">Illustrative product data</p></div></div></section>

    <section className="control" id="control"><div className="shell controlGrid"><div><p className="eyebrow"><i />Control plane</p><h2>Designed for accountable operations.</h2></div><article><span>01 / ACCESS</span><h3>Roles and permissions</h3><p>Organize access around the people, responsibilities, and records that matter.</p></article><article><span>02 / CONTINUITY</span><h3>Connected history</h3><p>Preserve the decisions and activity behind every important outcome.</p></article><article><span>03 / DEPLOYMENT</span><h3>Self-hosted foundation</h3><p>Run the platform on infrastructure under your operational control.</p></article></div></section>

    <section className="closing"><div className="shell"><p>{product.name} platform</p><h2>Put the whole operation<br/>on the same page.</h2><a className="primary" href={product.appUrl}>Start with {product.name} <span>↗</span></a></div></section>

    <footer><div className="shell footerGrid"><div className="footerBrand"><div className="brand"><span className="brandWordmark footerWordmark"><Image src={`/wordmarks/${product.key}.png`} alt={`${product.name} logo`} fill sizes="172px"/></span></div><p>{product.category} for connected, accountable teams.</p></div><div><h3>Product</h3><a href="#platform">Platform</a><a href="#capabilities">Capabilities</a><a href="#workflow">How it works</a></div><div><h3>Access</h3><a href={product.appUrl}>Open app</a><a href="mailto:support@techyst.net">Support</a><a href="mailto:team@techyst.net">Contact</a></div><div><h3>Foundation</h3><a href="/">All Techyst apps</a><span>Built on {product.foundation}</span><span>Self-hosted deployment</span><span>© 2026 {product.name}</span></div></div><div className="giantWord">{product.name}</div></footer>
  </main>;
}

function ProductConsole({ product }: { product: Product }) {
  return <div className="console"><div className="consoleBar"><span><i/><i/><i/></span><small>{product.name} / command center</small><b><i /> {product.status}</b></div><div className="consoleBody"><aside><div className="miniBrand"><span className="brandWordmark compactWordmark"><Image src={`/wordmarks/${product.key}.png`} alt={`${product.name} logo`} fill sizes="104px"/></span></div>{["Overview", ...product.capabilities.slice(0,5).map(x=>x.title)].map((x,i)=><span className={i===0?"selected":""} key={x}><i>{icons[i%icons.length]}</i>{x}</span>)}</aside><div className="dashboard"><div className="dashHead"><div><small>OPERATING OVERVIEW</small><h3>Good morning</h3></div><button>＋ New record</button></div><div className="dashStats">{product.metrics.map(x=><article key={x.label}><small>{x.label}</small><strong>{x.value}</strong><span><i /></span></article>)}</div><div className="dashMain"><article className="activity"><div><h4>Active work</h4><small>Updated now</small></div>{product.capabilities.slice(0,4).map((x,i)=><p key={x.title}><span className={`avatar a${i}`}>{x.title[0]}</span><b>{x.title}</b><em>{70+i*6}%</em></p>)}</article><article className="chart"><div><h4>Performance</h4><small>Last 8 periods</small></div><svg viewBox="0 0 360 150" role="img" aria-label="Illustrative performance trend"><defs><linearGradient id={`fill-${product.key}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--tint)" stopOpacity=".28"/><stop offset="1" stopColor="var(--tint)" stopOpacity="0"/></linearGradient></defs><path d="M4 130 C42 112,57 121,91 94 S144 104,174 70 S231 86,258 48 S318 64,356 18 L356 146 L4 146Z" fill={`url(#fill-${product.key})`}/><path d="M4 130 C42 112,57 121,91 94 S144 104,174 70 S231 86,258 48 S318 64,356 18" fill="none" stroke="var(--tint)" strokeWidth="3"/></svg></article></div></div></div></div>;
}
