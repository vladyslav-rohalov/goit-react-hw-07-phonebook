import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GrUserAdd } from 'react-icons/gr';

export const AddContactContainer = styled.div`
  width: calc(100% - 1.25em);
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0.5em;
`;

export const AddDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 7.5em);
  margin-top: 3em;
  border-radius: 0.5em;
  background-color: #ffffffcc;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  padding: 20px 10px 0px 10px;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  margin: 0 auto 1em;
`;

export const ContainerForm = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  background-color: #ffffffcc;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
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

export const IconAddContact = styled(GrUserAdd)``;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
