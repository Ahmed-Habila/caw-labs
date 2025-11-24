import { Link } from 'react-router-dom'
import styles from './Exo4.module.css'
import DivBuilder from '../../components/DivBuilder/DivBuilder'

export default function Exo4() {
  return (
    <div className={styles.page}>
      <nav className={styles.subNav}>
        <Link to="/">Home</Link>
      </nav>

      <h1>Exercise 4 Add divs</h1>

      <section className={styles.section}>
        <DivBuilder />
      </section>
    </div>
  )
}