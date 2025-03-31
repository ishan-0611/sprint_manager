import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './screens/HomePage'
import Sprints from './components/Sprints';
import Tasks from './components/Tasks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <Tasks />,
  },
  {
    path: "about2",
    element: <Sprints />, 
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
