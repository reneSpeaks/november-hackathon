import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Landing from './pages/Landing.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Dashboard from "./pages/Dashboard.jsx"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="news/:id" element={<News />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Route>
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
