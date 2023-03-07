import styled from '@emotion/styled';
import { TiDelete } from 'react-icons/ti';
const bgi = require('../images/phone.png');

export const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  max-height: 100vh;
  padding: 30px;
  background-image: url(${bgi});
  background-size: contain;
  background-repeat: no-repeat;
`;

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
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 32px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button`
  width: 128px;
  height: 32px;
  margin: 0 auto;
  background-color: #c2cbf0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #333;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 4px #111;
    transition: 0.3s;
  }
`;

export const List = styled.ul`
  min-height: 40vh;
  max-height: 40vh;
  list-style: none;
  padding: 0;
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
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
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(245, 207, 207);
    transform: scale(1.1);
    box-shadow: 0 0 2px #111;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
