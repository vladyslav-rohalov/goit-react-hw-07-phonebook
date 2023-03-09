import styled from '@emotion/styled';
import { IoMdFingerPrint } from 'react-icons/io';

export const Locked = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

export const TimeDate = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  margin: 0 auto;
  align-items: center;
  color: white;
`;

export const UnlockButton = styled.button`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  background-color: black;
  padding: 0;
  border: none;
  border-radius: 50%;
`;

export const IconFingerPrint = styled(IoMdFingerPrint)`
  width: 80px;
  height: 80px;
  fill: white;
`;

export const DisplayTime = styled.p`
  font-size: 60px;
  margin: 0;
`;

export const DisplayDate = styled.p`
  font-size: 20px;
`;
