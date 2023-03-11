import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContacts } from 'Redux/Selectors';
import { editContact } from 'Redux/Operations';
import { useParams } from 'react-router-dom';
import { Container } from 'pages/home/home.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAddEdit from 'components/contactAddEdit/contactAddEdit';

export default function EditContact() {
  const items = useSelector(getContacts);
  const { id } = useParams();
  const index = items.findIndex(contact => contact.id === id);
  const avatarPicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const email = form.elements.email.value;
    const contact = {
      name: name,
      phone: phone,
      email: email,
    };
    twinCheck(name, contact);
    form.reset();
  };

  const twinCheck = newContactName => {
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
      // console.log(items[index]);
      dispatch(editContact(items[index]));
      navigate('/phonebook', { replace: true });
    }
    isTwin = false;
  };

  const handlePick = () => {
    avatarPicker.current.click();
  };

  return (
    <Container>
      <ContactAddEdit
        title="Edit contact"
        titleButton="Edit contact"
        handleSubmit={handleSubmit}
        handlePick={handlePick}
        avatarPicker={avatarPicker}
      />
      <ToastContainer />
    </Container>
  );
}
