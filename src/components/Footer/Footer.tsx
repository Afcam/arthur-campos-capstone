import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <Logo />
            <div className="footer__text">
              This is a browser game that incorporates the Git flow and Git commands, creating a fun
              and educational experience for users.
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__info">
              <h2 className="footer__title">About</h2>
              <Link to="/" className="footer__link">
                Contribute
              </Link>
              <Link to="/" className="footer__link">
                About GitClash
              </Link>
              <Link to="/" className="footer__link">
                Chhangelogs
              </Link>
              <Link to="/" className="footer__link">
                Contribute
              </Link>
            </div>
            <div className="footer__info">
              <h2 className="footer__title">Project</h2>
              <Link to="/" className="footer__link">
                Repository
              </Link>
              <Link to="/" className="footer__link">
                Documentation
              </Link>
              <Link to="/" className="footer__link">
                Contribute
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__by">
          <div className="footer__text">
            Built by <a href="https://github.com/Afcam">Afcam</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
