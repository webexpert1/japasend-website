const features = [
  {
    number: "01",
    title: "Send money home",
    description: "Support the people who matter with a simpler way to send money from abroad to Nigeria.",
  },
  {
    number: "02",
    title: "Take care of bills",
    description: "Make everyday payments back home, from airtime and data to essential household bills.",
  },
  {
    number: "03",
    title: "Pay for what matters",
    description: "Help with school fees and payments to verified local merchants, even when you are far away.",
  },
];

const steps = [
  ["01", "Create your account", "Get started with your details and set up your JapaSend profile."],
  ["02", "Choose what you need", "Select a transfer or the bill or service you want to take care of."],
  ["03", "Stay in the loop", "Follow your transaction and get updates as it progresses."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#10243a]">
      <header className="site-header">
        <a href="#" className="brand" aria-label="JapaSend home">
          <span className="brand-mark">J</span>
          <span>japa<span className="brand-accent">send</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why-japasend">Why JapaSend</a>
          <a href="#how-it-works">How it works</a>
          <a href="#our-purpose">Our purpose</a>
        </nav>
        <a className="header-cta" href="mailto:hello@japasend.com?subject=JapaSend%20early%20access">Get in touch <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> MADE FOR LIFE ACROSS BORDERS</div>
          <h1>Your money.<br />Your people.<br /><span>Your home.</span></h1>
          <p className="hero-description">
            Wherever life takes you, staying connected to home should feel simple.
            JapaSend is being built to help you take care of the people and things
            that matter back in Nigeria.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="mailto:hello@japasend.com?subject=JapaSend%20early%20access">Join the early access list <span>↗</span></a>
            <a className="text-link" href="#how-it-works">See how it works <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-check">✓</span> Built around the needs of the Nigerian diaspora</div>
        </div>

        <div className="hero-art" aria-label="Illustration representing connections between life abroad and home">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="glow" />
          <div className="home-card">
            <div className="home-card-top"><span className="mini-logo">J</span><span className="card-label">A little closer to home</span><span className="live-dot" /></div>
            <div className="map-illustration">
              <div className="map-line map-line-one" />
              <div className="map-line map-line-two" />
              <div className="map-pin pin-abroad"><span>✦</span></div>
              <div className="map-pin pin-home"><span>⌂</span></div>
              <div className="route-dash" />
              <span className="map-label label-abroad">ABROAD</span>
              <span className="map-label label-home">HOME</span>
            </div>
            <div className="home-card-bottom"><span className="bottom-icon">↗</span><span>Distance feels smaller when you can show up.</span></div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon">◎</span><span><strong>Across borders</strong><small>One connection to home</small></span></div>
          <div className="floating-chip chip-bottom"><span className="chip-icon green">♡</span><span><strong>For your people</strong><small>The things that matter</small></span></div>
          <div className="hero-spark spark-one">✳</div><div className="hero-spark spark-two">✦</div>
        </div>
      </section>

      <section className="trust-strip">
        <span>FROM WHERE YOU ARE</span><i /> <strong>United Kingdom</strong><i /> <strong>United States</strong><i /> <strong>Canada</strong><i /> <span>TO THE PEOPLE YOU LOVE IN NIGERIA</span>
      </section>

      <section className="section features-section" id="why-japasend">
        <div className="section-heading">
          <div><div className="eyebrow">HOME IS ALWAYS PART OF THE PLAN</div><h2>More ways to show up<br />for the people back home.</h2></div>
          <p>Being far away shouldn't make the important things harder. We are bringing the everyday ways you support home into one considered experience.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-symbol">{feature.number === "01" ? "↗" : feature.number === "02" ? "⌁" : "◇"}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="eyebrow light-eyebrow">STRAIGHTFORWARD BY DESIGN</div>
          <h2>Home matters.<br /><span>Getting there should be simple.</span></h2>
          <p className="how-intro">We are designing JapaSend around a clear, reassuring experience from the first step to the latest update.</p>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step" key={number}>
                <span className="step-number">{number}</span><div className="step-rule" />
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="purpose-section" id="our-purpose">
        <div className="purpose-mark">J</div>
        <div className="purpose-copy"><div className="eyebrow">A CONNECTION THAT TRAVELS</div><h2>Wherever you go,<br />home goes with you.</h2><p>JapaSend is being built for people creating a life abroad while staying present for family, friends and responsibilities back home. Our starting point is the Nigerian diaspora, with a vision to make cross-border support feel more connected and less complicated.</p></div>
        <a className="purpose-link" href="mailto:hello@japasend.com">Talk to our team <span>↗</span></a>
      </section>

      <footer className="site-footer">
        <a href="#" className="brand footer-brand"><span className="brand-mark">J</span><span>japa<span className="brand-accent">send</span></span></a>
        <span className="footer-note">Your money. Your people. Your home.</span>
        <div className="footer-links"><a href="mailto:hello@japasend.com">Contact</a><a href="#our-purpose">About</a></div>
        <span className="copyright">© 2026 JapaSend. Made with home in mind.</span>
      </footer>
    </main>
  );
}
