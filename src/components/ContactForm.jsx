import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import { addContact } from 'Redux/Operations';
import { getContacts } from 'Redux/Selectors';
import {
  ContainerForm,
  AddButton,
  Form,
  Label,
  Input,
  Button,
  IconAddContact,
  IconCross,
} from './Phonebook.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const toggleAddMenu = e => {
    if (e) {
      setIsOpen(true);
    }
  };

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
    <ContainerForm>
      {isOpen ? (
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
          <Button type="submit">
            Add contact&nbsp;
            <IconAddContact />
          </Button>
        </Form>
      ) : (
        <AddButton type="button" onClick={toggleAddMenu}>
          Add contact &nbsp;
          <IconCross />
        </AddButton>
      )}
    </ContainerForm>
  );
}
