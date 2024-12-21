import { ReactNode } from 'react';
import Header from './Header/Header';
import './Layout.scss';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <div className="page-content">
        <ThemeSwitcher />
        {children}
      </div>
    </>
  );
};
export default Layout;
