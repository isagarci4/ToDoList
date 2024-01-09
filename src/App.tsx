import { useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/ListHeader'

import styles from './App.module.css'

import './global.css'
import { Task } from './components/Task'
import { EmptyList } from './components/EmptyList'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}


function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />

      <section className={styles.content}>
        <div className={styles.createTask}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button children="Criar" onClick={handleAddTask} />
        </div>
        <div className={styles.taskList}>
            <ListHeader 
              tasksCounter={tasks.length}
              checkedTasksCounter={checkedTasksCounter}
            />     

            {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}    
        </div>
      </section>
    </div>
  )
}

export default App
