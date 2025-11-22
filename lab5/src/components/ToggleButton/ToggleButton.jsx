import { useState } from 'react'
import styles from './ToggleButton.module.css'

export default function ToggleButton() {
  const [pressed, setPressed] = useState(false)
  return (
    <button
      className={pressed ? `${styles.toggleButton} ${styles.toggleButtonPressed}` : styles.toggleButton}
      onClick={() => setPressed(p => !p)}
      aria-pressed={pressed}
    >
      {pressed ? 'Clicked' : 'Not Clicked'}
    </button>
  )
}