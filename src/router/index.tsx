// Configuration
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages and components 
import { PageLayout } from '../pages/page-layout/index.tsx'
import { HomePage } from '../pages/home-page/index.tsx'
import { AddVisitPage } from '../pages/add-visit-page/index.tsx'
import { NotFoundPage } from '../pages/not-found-page/index.tsx'


// Routing 
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />, // Use Layout as the root element
    errorElement: <NotFoundPage />,
    children: [ // All pages become children of the layout
      {
        index: true, // This makes it the default route for "/"
        element: <HomePage />,
      },
      {
        path: 'add-visit',
        element: <AddVisitPage />,
      },
    
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)