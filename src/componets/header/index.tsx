import { useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <header>
      <p>Your are here: {location.pathname}</p>
    </header>
  );
}