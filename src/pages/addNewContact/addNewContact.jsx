import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/Selectors';
import { addContact } from 'Redux/Operations';
import { Container } from 'pages/home/home.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddContactContainer,
  AddDetails,
  Title,
  ContainerForm,
  Form,
  Label,
  Input,
  AddButton,
  IconAddContact,
  LinkStyled,
} from './addNewContact.styled';

export default function AddNewContact() {
  const items = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = {
      name: name,
      phone: phone,
    };
    twinCheck(name, contact);
    form.reset();
  };

  const twinCheck = (newContactName, contact) => {
    let isTwin = items.find(prevContact => {
      if (prevContact.name === newContactName) {
        toast.warn('This contact already exists', {
          position: toast.POSITION.TOP_CENTER,
        });
        return true;
      }
      return false;
    });
    if (!isTwin) {
      dispatch(addContact(contact));
    }
    isTwin = false;
  };

  return (
    <Container>
      <AddContactContainer>
        <AddDetails>
          <Title>Add new contact</Title>
          <ContainerForm>
            <Form onSubmit={handleSubmit}>
              <ToastContainer />
              <Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>
              <Label>
                <Input
                  type="tel"
                  name="number"
                  placeholder="Phone number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Label>

              <Label>
                <Input
                  type="tel"
                  name="mail"
                  placeholder="Email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  title="The email address must be set to letters and contain @, it must not contain spaces, dashes, or parentheses. "
                />
              </Label>
              <Label>
                {/* Choose an avatar */}
                <input
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
              </Label>
              <LinkStyled>
                <AddButton type="submit">
                  Add contact&nbsp;
                  <IconAddContact />
                </AddButton>
              </LinkStyled>
            </Form>
          </ContainerForm>
        </AddDetails>
      </AddContactContainer>
    </Container>
  );
}
