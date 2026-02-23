import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Renata Machado',
    role: 'CEO',
    bio: 'Psychologist specialized in crisis management. Owner of multiple clothing stores from a major brand. Founder of her own retail brand.',
  },
  {
    name: 'Pedro Serra',
    role: 'CTO',
    bio: 'CTO of a startup (>€10M raised). Head of control systems for a European Space Agency spacecraft.',
  },
  {
    name: 'João Torres',
    role: 'COO',
    bio: 'Managed a €30MM+ business at Amazon. Launched Uber\'s Lisbon Centre of Excellence, creating 300+ jobs.',
  },
  {
    name: 'Rita Higino',
    role: 'CQO',
    bio: 'Led management and strategic development in her family pharmacy.',
  },
]

function WhoWeAre() {
  return (
    <div className="page-wrap">
      <main className="who-page">
        <div className="container">
          <h1 className="who-title">Who we are</h1>
          <p className="who-tagline">If you can't stand the heat, get out of the kitchen.</p>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <h2 className="team-name">{member.name}</h2>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </article>
            ))}
          </div>
          <Link to="/" className="button button-primary">Back to home</Link>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
          <nav className="footer-nav">
            <Link to="/who-we-are">Who we are?</Link>
            <a href="#">Careers</a>
            <a href="mailto:ask@teyia.net">Contact</a>
          </nav>
          <p className="footer-copy">© TEYIA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default WhoWeAre
