import { Link } from 'react-router-dom'

function ClientLogin() {
  function handleSubmit(e) {
    e.preventDefault()
    // Does not go anywhere – placeholder only
  }

  return (
    <div className="login-page">
      <div className="login-card slide-card">
        <div className="login-inner">
          <h1 className="login-title">Client Login</h1>
          <p className="login-sub">Enter your credentials to access the client portal.</p>
          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label">
              Username
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Your username"
                autoComplete="username"
              />
            </label>
            <label className="login-label">
              Password
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Your password"
                autoComplete="current-password"
              />
            </label>
            <button type="submit" className="button button-primary button-large">
              Sign in
            </button>
          </form>
          <Link to="/" className="login-back">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default ClientLogin
