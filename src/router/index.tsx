// Configuration
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Theme
import { theme } from '../theme'

// Pages and components 
import { PageLayout } from '../pages/page-layout/index.tsx'
import { HomePage } from '../pages/home-page/index.tsx'
import { AddVisitPage } from '../pages/add-visit-page/index.tsx'
import { NotFoundPage } from '../pages/not-found-page/index.tsx'
import { SearchPage } from '../pages/search-visit/index.tsx'
import { ServicesPage } from '../pages/services-page/index.tsx'
import { ManagePage } from '../pages/manage-page/index.tsx'


// Routing 
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
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
        path: 'manage',
        element: <ManagePage />,
      },
    ]
  }
]);

// Display 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)