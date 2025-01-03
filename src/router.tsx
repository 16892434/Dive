import { createBrowserRouter } from "react-router-dom"
import Layout from "./views/Layout"
import Chat from "./views/Chat"
import Welcome from "./views/Welcome"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "chat/:chatId",
        element: <Chat />
      }
    ]
  }
])
