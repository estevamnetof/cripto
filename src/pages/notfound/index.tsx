import styles from './notfound.module.css';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <Link to="/">
        Acessar cripto moedas
      </Link>
    </div>
  )
}