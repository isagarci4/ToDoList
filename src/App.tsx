import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/ListHeader'

import styles from './App.module.css'

import './global.css'
import { EmptyList } from './components/EmptyList'

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

            <EmptyList />     
        </div>
      </section>
    </div>
  )
}

export default App
