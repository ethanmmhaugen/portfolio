import { useState } from 'react';
import SiteRoutes from './routes/SiteRoutes';

function App() {
  const [count, setCount] = useState(0);

  return <SiteRoutes />;
}

export default App;
