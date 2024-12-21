import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../components/Homepage/Homepage';
import Sandbox from '../components/Sandbox/Sandbox';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

export enum RoutePath {
  ROOT = '/',
  SANDBOX = '/sandbox',
  THEME = '/theme',
}

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RoutePath.ROOT} element={<Homepage />} />
          <Route path={RoutePath.SANDBOX} element={<Sandbox />} />
          <Route path={RoutePath.THEME} element={<ThemeSwitcher />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default SiteRoutes;
