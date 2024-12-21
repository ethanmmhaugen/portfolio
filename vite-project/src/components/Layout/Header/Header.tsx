import Links from '../Links/Links';
import tempIcon from '@icons/react.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="navbar-fixed-top">
      <img src={tempIcon} className="home-icon" />
      <div className="links-container">
        <Links />
      </div>
    </div>
  );
};
export default Header;
