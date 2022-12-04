import style from './Button.module.css'
import { FiPlusCircle } from 'react-icons/fi'

export function Button() {
    return (
        <>
            <button className={style.button}>
                <span>Criar</span>
                <FiPlusCircle className={style.icon}/>
            </button>
        </>
    )
}