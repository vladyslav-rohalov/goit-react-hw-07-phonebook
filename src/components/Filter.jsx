import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/contactsSlice';
import { Input, Label, SearchIcon } from './Phonebook.styled';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Label>
      <SearchIcon />
      <Input
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Find contacts by name"
        type="text"
      ></Input>
    </Label>
  );
}
