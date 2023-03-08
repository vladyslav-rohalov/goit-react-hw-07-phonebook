import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from 'Redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Operations';
import { delContact } from 'Redux/Operations';
import { List, ListItem, ListBtn, IconDel } from './Phonebook.styled';

export default function ContactList() {
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const filtredPhonebook = items.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && (
        <List>
          {filtredPhonebook.map(({ id, name, phone }) => {
            return (
              <ListItem key={id}>
                <p>
                  {name}: {phone}
                </p>
                <ListBtn type="button" onClick={() => dispatch(delContact(id))}>
                  <IconDel />
                </ListBtn>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
}
