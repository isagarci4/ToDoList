import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/ListHeader'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <section className={styles.content}>
        <div className={styles.createTask}>
          <Input />
          <Button />
        </div>

        <div className={styles.taskList}>
            <ListHeader />          
        </div>
      </section>
    </div>
  )
}

export default App
