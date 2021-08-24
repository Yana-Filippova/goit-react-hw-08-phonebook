import imageNotFound from '../../images/pageNotFound.png';
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className={styles.container}>
      <img src={imageNotFound} width="650" alt="ErrorImage" />
    </div>
  );
}
