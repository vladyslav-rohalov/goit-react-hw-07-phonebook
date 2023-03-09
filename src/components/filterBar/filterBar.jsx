import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/contactsSlice';

import {
  Bar,
  Input,
  Label,
  IconSearch,
  IconCross,
  LinkStyled,
} from './filterBar.styled';

export default function FilterBar() {
  const dispatch = useDispatch();
  return (
    <Bar>
      <Label>
        <Input
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Find contacts by name"
          type="text"
        ></Input>
        <IconSearch />
        <LinkStyled>
          <IconCross />
        </LinkStyled>
      </Label>
    </Bar>
  );
}
