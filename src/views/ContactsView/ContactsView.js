import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length > 1 && (
        <p className={styles.filter}>Find contacts by name</p>
      )}
      <Filter />
      <ContactList />
    </div>
  );
}
