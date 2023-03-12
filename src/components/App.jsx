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
const EditNewContact = lazy(() => import('../pages/editContact/editContact'));
const Youtube = lazy(() => import('../pages/youtube/youtube'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<ScreenLock />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/phonebook/:id" element={<ContactInfo />} />
        <Route path="/add" element={<AddNewContact />} />
        <Route path="/edit/:id" element={<EditNewContact />} />
        <Route path="/youtube" element={<Youtube />} />
      </Route>
    </Routes>
  );
}
