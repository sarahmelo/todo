import style from './EmptyList.module.css'
export function EmptyList() {
    return (
        <div className={style.container}>
            <img className={style.icon} src="src/assets/clipboard.svg" alt="clipboard icon" />
            <strong className={style.title}>Você ainda não tem tarefas cadastradas</strong>
            <p className={style.subtitle}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}