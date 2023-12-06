import styles from './ListHeader.module.css';

export function ListHeader() {
    return(
        <header className={styles.listHeader}>
            <aside>
                <p>Tarefas criadas</p>
                <span>0</span>
            </aside>

            <aside>
                <p>Concluidas</p>
                <span>0</span>
            </aside>
        </header>
    )
}