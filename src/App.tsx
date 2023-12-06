// import styles from './App.css'

import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <section className={styles.content}>
        <Input />
      </section>
    </div>
  )
}

export default App
