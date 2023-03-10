import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Frame,
  Camera,
  ButtonLock,
  BackBar,
  Button,
  IconHome,
  IconBack,
} from './sharedLayout.styled';

export default function SharedLayout() {
  return (
    <Frame>
      <Camera />
      <Suspense>
        <Outlet />
      </Suspense>
      <Link to={'/'}>
        <ButtonLock />
      </Link>

      <BackBar>
        <Link to={'/home'}>
          <Button>
            <IconHome />
          </Button>
        </Link>
        <Link>
          <Button>
            <IconBack />
          </Button>
        </Link>
      </BackBar>
    </Frame>
  );
}
