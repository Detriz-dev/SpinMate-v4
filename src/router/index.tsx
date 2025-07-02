import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PageLayout } from '../pages/page-layout/index.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout />
  </StrictMode>,
)


