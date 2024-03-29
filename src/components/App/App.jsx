import { ToastContainer, Flip } from 'react-toastify';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          transition={Flip}
        />
        <h1 className={s.title}>Phonebook </h1>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
