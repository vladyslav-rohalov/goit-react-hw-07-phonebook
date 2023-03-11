import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from 'Redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Operations';
import {
  ContactsContainer,
  List,
  ListItem,
  LinkStyled,
} from './contactList.styled';
import Error from 'components/error/error';
import Loader from 'components/loader/loader';

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
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <Error />}
      {items.length > 0 && (
        <List>
          {filtredPhonebook.map(({ id, name }) => {
            return (
              <ListItem key={id}>
                <LinkStyled to={`/phonebook/${id}`} state={{ from: location }}>
                  {name}
                </LinkStyled>
              </ListItem>
            );
          })}
        </List>
      )}
    </ContactsContainer>
  );
}
