import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';

export const Bar = styled.div`
  display: flex;
  gap: 10px;
  width: calc(100% - 20px);
  background-color: #ffffffcc;
  margin: 3%;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  min-height: 4vh;
  width: 100%;
  align-items: center;
  margin: 0 0.5em;
`;

export const Input = styled.input`
  height: calc(100% - 2px);
  width: 75%;
  padding: 0px 0px 0px 8px;
  border: none;
  border-radius: 8px;
  margin-right: 4px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const IconSearch = styled(GoSearch)`
  fill: #000000;
`;

export const IconCross = styled(AiOutlinePlus)`
  fill: #000000;
`;

export const LinkStyled = styled(Link)`
  margin: 0 auto;
`;
