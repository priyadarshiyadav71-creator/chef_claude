export default function Footer() {
  return (
    <footer className="chef-footer inter">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Chef Claude</span>
          <p className="footer-tagline">
            Turn your everyday pantry items into delicious AI-crafted meals.
          </p>
        </div>

        <div className="footer-links">
          <a href="#how-it-works">How it Works</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>AI-generated recipes — always double-check ingredients for allergies.</p>
      </div>
    </footer>
  )
}
