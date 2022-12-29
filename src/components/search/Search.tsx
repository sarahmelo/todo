import { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { ITask } from '../../interface/task.interface'
import styles from './Search.module.css'

export function Search({onNewTask}: any) {
    const [newTextTitle, setNewTaskTitle] = useState<string>('')
    
    function addNewTask(taskName: string): void {
        const task: ITask = {
            complete: false,
            id: Math.random(),
            name: taskName,
        }

        if (newTextTitle.length === 0) {
            return;
        }

        onNewTask(task);
        setNewTaskTitle('');
    }

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                id='search-input'
                placeholder='Adicione uma nova tarefa'
                className={styles.input}    
                onChange={(e) => setNewTaskTitle(e.target.value)}
                value={newTextTitle}
            />
            

            <button 
                className={styles.button}
                onClick={() => addNewTask(newTextTitle)}    
            >
                <span>Criar</span>
                <FiPlusCircle className={styles.icon}/>
            </button>
        </div>
    )
}