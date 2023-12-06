// import styles from './App.css'

import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'

import './global.css'
import { Button } from './components/Button'

function App() {

  return (
    <div>
      <Header />

      <section className={styles.content}>
        <div className={styles.createTask}>
          <Input />
          <Button />
        </div>
      </section>
    </div>
  )
}

export default App
