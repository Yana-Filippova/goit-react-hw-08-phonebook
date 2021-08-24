import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import PhoneIcon from '../../images/phoneIcon.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.container}>
      <img
        src={PhoneIcon}
        alt="PhoneIcon"
        width="33"
        className={styles.phone}
      />
      <span className={styles.name}>Welcome, {name}!</span>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
