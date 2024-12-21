import { ReactNode } from 'react';
import Header from './Header/Header';
import './Layout.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <div className="page-content">{children}</div>
    </>
  );
};
export default Layout;
