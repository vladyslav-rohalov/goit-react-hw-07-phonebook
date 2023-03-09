import { Link } from 'react-router-dom';
import {
  Locked,
  TimeDate,
  DisplayTime,
  DisplayDate,
  UnlockButton,
  IconFingerPrint,
} from './screenLock.styled';

export default function ScreenLock() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth();
  let monthName = '';
  switch (month) {
    case 0:
      monthName = 'January';
      break;
    case 1:
      monthName = 'February';
      break;
    case 2:
      monthName = 'March';
      break;
    case 3:
      monthName = 'April';
      break;
    case 4:
      monthName = 'May';
      break;
    case 5:
      monthName = 'June';
      break;
    case 6:
      monthName = 'July';
      break;
    case 7:
      monthName = 'August';
      break;
    case 8:
      monthName = 'September';
      break;
    case 9:
      monthName = 'October';
      break;
    case 10:
      monthName = 'November';
      break;
    case 11:
      monthName = 'December';
      break;

    default:
      monthName = '';
  }

  return (
    <Locked>
      <TimeDate>
        <DisplayTime>
          {hour}:{minutes}
        </DisplayTime>
        <DisplayDate>
          {day}&nbsp;{monthName}
        </DisplayDate>
      </TimeDate>
      <Link to="/home">
        <UnlockButton type="button">
          <IconFingerPrint />
        </UnlockButton>
      </Link>
    </Locked>
  );
}
