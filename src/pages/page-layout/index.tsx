import { Outlet } from 'react-router-dom';


export function PageLayout() {
  return (
    <>
      <h1>test</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}