import { Link } from 'react-router-dom';
import logo from '@/assets/gitclash.png';
import './Logo.scss';

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="GitClash Logo" className="logo__image" />
        <h1 className="logo__title">GitClash</h1>
      </div>
    </Link>
  );
}
