import styles from './EmptyList.module.css';

export function EmptyList() {
    return(
        <div className={styles.emptyList}>
            <img src="/clipboard.svg" alt="" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}