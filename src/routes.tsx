import Layout from './app/Layout'
import Home from './pages/Home'
import GistDetail from './pages/GistDetail'
import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([   
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/gist/:gistId',
    element: <Layout><GistDetail /></Layout>,
  },
])
