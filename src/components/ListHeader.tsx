import styles from './ListHeader.module.css';

interface Props {
    tasksCounter: number
    checkedTasksCounter: number
  }

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
    return(
        <header className={styles.listHeader}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluidas</p>
                <span>
                    {tasksCounter === 0
                     ? tasksCounter
                     : `${checkedTasksCounter} de ${tasksCounter}`}  
                </span>
            </aside>
        </header>
    )
}