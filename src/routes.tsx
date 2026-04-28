import { createBrowserRouter } from 'react-router-dom'
import Layout from './app/Layout'
import Home from './pages/Home'
import GistDetail from './pages/GistDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/gist/:gistId',
    element: <Layout><GistDetail /></Layout>,
  },
])
