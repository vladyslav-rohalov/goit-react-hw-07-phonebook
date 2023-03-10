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
        <IconSearch />
        <Input
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Find contacts by name"
          type="text"
        ></Input>
        <LinkStyled to={`/add`}>
          <IconCross />
        </LinkStyled>
      </Label>
    </Bar>
  );
}
