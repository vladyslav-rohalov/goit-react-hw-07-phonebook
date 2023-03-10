// import { ContactForm, Filter, ContactList } from './index';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'Redux/Selectors';
// import { useState } from 'react';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/sharedLayout';

const ScreenLock = lazy(() => import('../pages/screenLock/screenLock'));
const Home = lazy(() => import('../pages/home/home'));
const Phonebook = lazy(() => import('../pages/phoneBook/phooneBook'));
const ContactInfo = lazy(() => import('../pages/contactInfo/contactInfo'));
const AddNewContact = lazy(() =>
  import('../pages/addNewContact/addNewContact')
);

// import {
//   // Backdrop,
//   Frame,
//   Camera,
//   Container,
//   TitleH1,
//   TitleH2,
//   Locked,
//   IconFingerPrint,
//   UnlockButton,
//   TimeDate,
//   DisplayTime,
//   DisplayDate,
// } from './Phonebook.styled';

export default function App() {
  // const items = useSelector(getContacts);
  // const [isLocked, setIsLocked] = useState(true);

  // const handleUnlockButton = e => {
  //   if (e) {
  //     setIsLocked(false);
  //   }
  // };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<ScreenLock />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/phonebook/:id" element={<ContactInfo />} />
        <Route path="/add" element={<AddNewContact />}></Route>
      </Route>
    </Routes>

    // <Frame>
    //   <Camera />
    //   {isLocked === true ? (
    // <Locked>
    //   <TimeDate>
    //     <DisplayTime>
    //       {hour}:{minutes}
    //     </DisplayTime>
    //     <DisplayDate>
    //       {day}&nbsp;{monthName}
    //     </DisplayDate>
    //   </TimeDate>
    //   <UnlockButton type="button" onClick={handleUnlockButton}>
    //     <IconFingerPrint />
    //   </UnlockButton>
    // </Locked>
    //   ) : (
    //     <Container>
    //       <TitleH1>Phonebook</TitleH1>
    //       <ContactForm />
    //       <TitleH2>Contacts ({items.length})</TitleH2>
    //       <Filter />
    //       <ContactList />
    //     </Container>
    //   )}
    // </Frame>
  );
}
