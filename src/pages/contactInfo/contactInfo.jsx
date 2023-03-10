import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getContacts, getIsLoading, getError } from 'Redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts, delContact } from 'Redux/Operations';
import { Container } from 'pages/home/home.styled';
import IconBar from 'components/iconBar/iconBar';
import {
  ContactContainer,
  ContactDetails,
  ContactAvatar,
  ContactName,
  ContactPhoneMail,
} from './contactInfo.styled';

export default function ContactInfo() {
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = items.find(item => item.id === id);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactContainer>
        {contact && (
          <ContactDetails>
            <ContactAvatar src={contact.avatar} alt="avatar" />
            <ContactName>{contact.name}</ContactName>
            <ContactPhoneMail>{contact.phone}</ContactPhoneMail>
            <ContactPhoneMail>{contact.email}</ContactPhoneMail>
            <IconBar
              contact={contact}
              onDelClick={() => dispatch(delContact(id))}
            />
          </ContactDetails>
        )}
      </ContactContainer>
    </Container>
  );
}
