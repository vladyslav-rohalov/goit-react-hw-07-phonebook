import styled from '@emotion/styled';
import { TiDelete } from 'react-icons/ti';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { GrUserAdd } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';

export const Frame = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 350px;
  max-height: 100vh;
  padding: 0 30px 30px;
  border: 5px solid black;
  border-radius: 25px;
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
    right: -30px;
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
`;

export const IconAddContact = styled(GrUserAdd)``;

export const Container = styled.div`
  max-height: 80vh;
`;

export const TitleH1 = styled.h1`
  text-align: center;
`;

export const TitleH2 = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 32px;
  padding-left: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button`
  width: 128px;
  height: 32px;
  margin: 0 auto;
  background: rgb(222, 210, 22);
  background: linear-gradient(
    90deg,
    rgba(222, 210, 22, 1) 0%,
    rgba(224, 172, 37, 0.8351934523809523) 43%,
    rgba(255, 89, 0, 1) 100%
  );
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #333;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 4px #111;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
  fill: black;
  width: 20px;
  height: 20px;
  fill: #747474;
  pointer-events: none;
`;

export const List = styled.div`
  height: 40vh;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const ListBtn = styled.button`
  position: relative;
  margin-left: 10px;
  height: 20px;
  width: 20px;
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(245, 207, 207);
    transform: scale(1.1);
    box-shadow: 0 0 2px #111;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const IconDel = styled(TiDelete)`
  width: 100%;
  height: 100%;
  color: rgb(231, 50, 50);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
