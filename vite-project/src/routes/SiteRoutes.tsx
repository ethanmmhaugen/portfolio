import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../components/Homepage/Homepage';
import Sandbox from '../components/Sandbox/Sandbox';

export enum RoutePath {
  ROOT = '/',
  SANDBOX = '/sandbox',
}

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RoutePath.ROOT} element={<Homepage />} />
          <Route path={RoutePath.SANDBOX} element={<Sandbox />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default SiteRoutes;
