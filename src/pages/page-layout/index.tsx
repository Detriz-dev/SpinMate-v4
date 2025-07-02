import { Outlet } from 'react-router-dom';
import { Navigation } from '../../componets/navigation';


export function PageLayout() {
  return (
    <>
      <Navigation/>
      <main>
        <Outlet />
      </main>
    </>
  );
}