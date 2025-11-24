import { Link } from 'react-router-dom'
import styles from './Exo3.module.css'
import AuthForm from '../../components/AuthForm/AuthForm'

export default function Exo3() {
  return (
    <div className={styles.page}>
      <nav className={styles.subNav}>
        <Link to="/">Home</Link>
      </nav>

      <h1>Exercise 3 Auth form</h1>

      <section className={styles.section}>
        <AuthForm />
      </section>
    </div>
  )
}