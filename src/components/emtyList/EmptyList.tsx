import style from './EmptyList.module.css'
export function EmptyList() {
    return (
        <div className={style.container}>
            <img className={style.icon} src="src/assets/undraw_empty.svg" alt="clipboard icon" />
            <div>
                <strong className={style.title}>Você não tem tarefas</strong>
                <p className={style.subtitle}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}