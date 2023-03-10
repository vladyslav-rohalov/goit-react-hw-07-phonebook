import { Link } from 'react-router-dom';
import Time from 'components/time/time';
import { Locked, UnlockButton, IconFingerPrint } from './screenLock.styled';

export default function ScreenLock() {
  return (
    <Locked>
      <Time />
      <Link to="/home">
        <UnlockButton type="button">
          <IconFingerPrint />
        </UnlockButton>
      </Link>
    </Locked>
  );
}
