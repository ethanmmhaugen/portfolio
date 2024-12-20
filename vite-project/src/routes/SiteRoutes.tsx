import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import Homepage from '../components/Homepage/Homepage';

export enum RoutePath {
    ROOT = '/'
}

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={RoutePath.ROOT} element={<Homepage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
export default SiteRoutes;