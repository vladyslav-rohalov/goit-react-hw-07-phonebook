import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiFillYoutube } from 'react-icons/ai';

const backdrop = require('../../backdrop.webp');

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  border-radius: 1.125em;
  background-image: url(${backdrop});
  background-size: cover;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const HomeIconBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: calc(100% - 1.25em);
  height: 10vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  background-color: transparent;
  padding: 0 0.625em 2em 0.625em;
  align-items: center;
  border-radius: 18px;
`;

export const LinkStyled = styled(Link)`
  width: 20%;
  height: 80%;
`;

const buttonDefaultSyle = `width: 100%;
height: 80%;
border: none;
border-radius: 25%;`;

export const ButtonPhone = styled.button`
  ${buttonDefaultSyle}
  background-color: #3ad364;
`;

export const IconPhone = styled(BiPhone)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const ButtonMessaage = styled.button`
  ${buttonDefaultSyle}
  background-color: #41a1ef;
`;

export const IconMessage = styled(AiOutlineMessage)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const ButtonMedia = styled.button`
  ${buttonDefaultSyle}
  background-color: #ffffff;
`;

export const IconChrome = styled(FcGoogle)`
  width: 40px;
  height: 40px;
  fill: white;
`;
export const IconYouTube = styled(AiFillYoutube)`
  width: 40px;
  height: 40px;
  fill: red;
`;
