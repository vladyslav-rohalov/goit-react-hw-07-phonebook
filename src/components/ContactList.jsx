import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'Redux/Selectors';
// import { fetchContacts } from 'Redux/Operations';
import { deleteContact } from 'Redux/contactsSlice';
import { List, ListItem, ListBtn, Svg } from './Phonebook.styled';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const filtredPhonebook = items.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
  return (
    items && (
      <List>
        {filtredPhonebook.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <ListBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </Svg>
              </ListBtn>
            </ListItem>
          );
        })}
      </List>
    )
  );
}
