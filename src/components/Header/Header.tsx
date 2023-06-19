// interface Props {}

import Logo from '../Logo/Logo';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
      </div>
    </header>
  );
}
