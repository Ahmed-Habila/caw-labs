import React, { useState } from 'react'
import styles from './AuthForm.module.css'

export default function AuthForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const name = username.trim()
    const pass = password
    if (!name) return
    const newUser = { id: Date.now().toString(), username: name, password: pass }
    setUsers((u) => [...u, newUser])
    setUsername('')
    setPassword('')
  }

  function handleDelete(id) {
    setUsers((u) => u.filter((x) => x.id !== id))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label className={styles.label}>
            Username
            <input
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              autoComplete="username"
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </label>
        </div>

        <div className={styles.row}>
          <button className={styles.submit} type="submit">Submit</button>
        </div>
      </form>

      <div className={styles.listWrap}>
        <h3 className={styles.listTitle}>Users</h3>
        <ul className={styles.list}>
          {users.map((u, idx) => (
            <li key={u.id} className={styles.item}>
              <span className={styles.itemText}>{idx + 1}. {u.username}</span>
              <button
                type="button"
                className={styles.delete}
                onClick={() => handleDelete(u.id)}
                aria-label={`Delete ${u.username}`}
              >
                Delete
              </button>
            </li>
          ))}
          {users.length === 0 && <li className={styles.empty}>No users yet.</li>}
        </ul>
      </div>
    </div>
  )
}