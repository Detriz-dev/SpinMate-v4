import { Paper, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  const getPageTitle = (pathname: string) => {
    const routes: Record<string, string> = {
      '/': 'Home',
      '/add-visit': 'Add Visit',
      '/search-visit': 'Search Visits',
      '/services': 'Services',
      '/settings': 'Settings',
      '/labels': 'Labels',
      '/mechanics': 'Mechanics',
      '/service-parts': 'service parts',
      
      
      
    };
    return routes[pathname] || 'Unknown Page';
  };

  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {getPageTitle(location.pathname)}
      </Typography>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <MuiLink component={Link} to="/" underline="hover" color="inherit">
          Home
        </MuiLink>
        
        {pathSegments.map((segment, index) => {
          const path = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          
          return isLast ? (
            <Typography key={path} color="text.primary">
              {getPageTitle(path)}
            </Typography>
          ) : (
            <MuiLink
              key={path}
              component={Link}
              to={path}
              underline="hover"
              color="inherit"
            >
              {getPageTitle(path)}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Paper>
  );
}