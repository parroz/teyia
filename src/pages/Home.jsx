function Home() {
  return (
    <>
      <main>
        <section className="hero slide-card">
          <div className="container hero-logo-wrap">
            <img
              src="/images/logo-teyia-flow12.png"
              alt="TEYIA"
              className="hero-logo"
            />
          </div>
        </section>

        <section className="hero slide-card hero-intro">
          <div className="container">
            <p className="hero-kicker">AI-powered computer vision for kitchens</p>
            <h1 className="hero-title hero-title-tagline">
              <span className="hero-line hero-line-1">See the process.</span>
              <span className="hero-line hero-line-2">Understand it.</span>
              <span className="hero-line hero-line-3">Improve the outcome.</span>
            </h1>
            <a href="mailto:ask@teyia.net" className="button button-primary">Get in touch</a>
          </div>
        </section>

        <section className="section slide-card section-text-only">
          <div className="container">
            <div className="card-quote card-quote-first">
              <span className="card-quote-label">Integration</span>
              <p className="card-quote-text">
                TEYIA integrates with the POS and uses Computer Vision to provide Real-time feedback.
              </p>
            </div>
            <div className="card-quote-divider" aria-hidden="true" />
            <div className="card-quote card-quote-second">
              <span className="card-quote-label">Visibility</span>
              <p className="card-quote-text">
                TEYIA captures the pulse of the kitchen, continuously and in real time — so you see every dish, every bottleneck, and every opportunity to improve.
              </p>
            </div>
          </div>
        </section>

        <section className="section slide-card slide-card-image-only" id="solution">
          <div className="container card-image-wrap">
            <img
              src="/images/Picture1.jpg"
              alt="TEYIA computer vision in the kitchen: object detection and pose estimation for workflow analysis"
              className="card-image"
            />
          </div>
        </section>

        <section className="section section-dark slide-card" id="impact">
          <div className="container">
            <h2 className="section-title">The impact of <strong>TEYIA</strong></h2>
            <div className="impact-grid">
              <div className="impact-card">
                <span className="impact-num">01</span>
                <h3>Full visibility</h3>
                <p>Per dish prepared — know exactly what happens in the kitchen.</p>
              </div>
              <div className="impact-card">
                <span className="impact-num">02</span>
                <h3>Hidden waste, quantified</h3>
                <p>See waste in euros and act on it.</p>
              </div>
              <div className="impact-card">
                <span className="impact-num">03</span>
                <h3>Peak-hour bottlenecks</h3>
                <p>Exposed and addressed in real time.</p>
              </div>
              <div className="impact-card">
                <span className="impact-num">04</span>
                <h3>Safety & hygiene</h3>
                <p>Risks detected and avoided before they become issues.</p>
              </div>
            </div>
            <div className="impact-stats">
              <div className="stat">
                <span className="stat-value">30 days</span>
                <span className="stat-label">Time to impact</span>
              </div>
              <div className="stat">
                <span className="stat-value">+3 pp</span>
                <span className="stat-label">EBITDA improvement</span>
              </div>
              <div className="stat">
                <span className="stat-value">5×</span>
                <span className="stat-label">Return on subscription & installation</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container">
          <nav className="footer-nav">
            <a href="#">Who we are?</a>
            <a href="#">Careers</a>
            <a href="mailto:joao@teyia.net">Contact</a>
          </nav>
          <p className="footer-copy">© TEYIA. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home
