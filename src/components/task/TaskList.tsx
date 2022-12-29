import { ITask } from "../../interface/task.interface";
import styles from './TaskList.module.css'

export interface TaskComponent {
    tasks: ITask[];
}

export function TaskList({ tasks }: TaskComponent) {
    return (
        <div>
            {
                tasks.map((task) => {
                    return (
                        <div className={styles.box}>
                            <input type="checkbox" id={task.name} />
                            <label 
                                htmlFor={task.name} 
                                key={task.id}
                                className={styles.taskName}    
                            >{task.name}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}