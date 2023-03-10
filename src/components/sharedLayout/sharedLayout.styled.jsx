import styled from '@emotion/styled';
import { BsCircleFill } from 'react-icons/bs';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiHomeLine } from 'react-icons/ri';

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
`;

export const ButtonLock = styled.button`
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
`;

export const Camera = styled(BsCircleFill)`
  width: 1.25em;
  height: 1.25em;
  margin: 0.25em auto;
  z-index: 2;
`;

export const BackBar = styled.div`
  position: absolute;
  bottom: -0.2em;
  display: flex;
  justify-content: center;
  gap: 6em;
  background-color: #000000;
  width: 100%;
  height: 2.5em;
  z-index: 1;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const buttonStyle = `fill: #ffffffcc;
width: 1.5em;
height: 1.5em;`;

export const IconBack = styled(RiArrowGoBackLine)`
  ${buttonStyle}
`;

export const IconHome = styled(RiHomeLine)`
  ${buttonStyle}
`;
