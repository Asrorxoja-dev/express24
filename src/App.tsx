import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"

import MainLayout from "./layout/MainLayout"
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
      
       
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App