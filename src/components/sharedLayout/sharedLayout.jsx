import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Frame, Camera } from './sharedLayout.styled';

export default function SharedLayout() {
  return (
    <Frame>
      <Camera />
      <Suspense>
        <Outlet />
      </Suspense>
    </Frame>
  );
}
