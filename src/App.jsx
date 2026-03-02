import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess";
const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        element:<ProtectedRoute/>,
        children:[
          {
            path:"cart",
            element:<Cart/>
          },
          { path: "/order-success", element: <OrderSuccess /> }
        ]
      }
    ]
  }
])
function App() {
  return (
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App;
