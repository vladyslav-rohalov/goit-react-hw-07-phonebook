import styled from '@emotion/styled';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

export const Frame = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 80vh;
  max-height: 100vh;
  border: 5px solid black;
  border-radius: 25px;
  background-size: cover;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::before {
    content: '';
    position: fixed;
    display: block;
    top: 15%;
    left: -55px;
    width: 100px;
    height: 8px;
    background: black;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left: 10px;
    rotate: 90deg;
  }
  &::after {
    content: '';
    position: fixed;
    display: block;
    top: 15%;
    right: -31px;
    width: 50px;
    height: 8px;
    background: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-left: 10px;
    rotate: 90deg;
  }
`;

export const Camera = styled(MdOutlineRadioButtonChecked)`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  z-index: 100;
`;
