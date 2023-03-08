import { ContactForm, Filter, ContactList } from './index';
import { useSelector } from 'react-redux';
import { getContacts } from 'Redux/Selectors';
import {
  Backdrop,
  Frame,
  Camera,
  Container,
  TitleH1,
  TitleH2,
} from './Phonebook.styled';

export default function App() {
  const items = useSelector(getContacts);
  return (
    <Backdrop>
      <Frame>
        <Camera />
        <Container>
          <TitleH1>Phonebook</TitleH1>
          <ContactForm />
          <TitleH2>Contacts ({items.length})</TitleH2>
          <Filter />
          <ContactList />
        </Container>
      </Frame>
    </Backdrop>
  );
}
