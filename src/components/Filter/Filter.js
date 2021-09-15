import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 1 && !error && (
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter contact name..."
            value={filter}
            onChange={event =>
              dispatch(contactsActions.filterContact(event.target.value))
            }
          />
        </label>
      )}
    </>
  );
}
