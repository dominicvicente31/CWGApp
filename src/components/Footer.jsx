import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand mono">&lt;CWG /&gt;</span>
        <p className="footer-text">
          Coding with Git — learn version control, ship with confidence.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} CWG. Built with React + Vite.</p>
      </div>
    </footer>
  )
}
