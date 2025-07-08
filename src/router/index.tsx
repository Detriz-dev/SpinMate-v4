// Configuration
import { StrictMode } from 'react'
export { router };
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages and components 
import { PageLayout } from '../pages/page-layout/index.tsx'
import { HomePage } from '../pages/home-page/index.tsx'
import { AddVisitPage } from '../pages/add-visit-page/index.tsx'
import { NotFoundPage } from '../pages/not-found-page/index.tsx'
import { SearchPage } from '../pages/search-visit/index.tsx'
import { ServicesPage } from '../pages/services-page/index.tsx'
import { SettingsPage } from '../pages/settings-page/index.tsx'
import { MechanicsPage } from '../pages/mechanics-page/index.tsx'
import { LabelsPage } from '../pages/labels-page/index.tsx'
import { ServiceParts } from '../pages/services-parts/index.tsx'


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
      {
        path: 'search-visit',
        element: <SearchPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'mechanics',
        element: <MechanicsPage />,
      },
      {
        path: 'labels',
        element: <LabelsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'service-parts',
        element: <ServiceParts />,
      },
    ]
  }
]);

// Display 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)