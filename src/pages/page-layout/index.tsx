import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navigation } from '../../componets/navigation';
export function PageLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content area */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          pb: 8, // Add padding bottom to prevent content from being hidden behind bottom nav
          px: 2,  // Optional: add some horizontal padding
          pt: 2   // Optional: add some top padding
        }}
      >
        <Outlet />
      </Box>
      
      {/* Bottom Navigation */}
      <Navigation />
    </Box>
  );
}