import { Button } from '../button/Button'
import { Input } from '../input/Input'
import styles from './Search.module.css'

export function Search() {
    return (
        <div className={styles.content}>
            <Input />
            <Button />
        </div>
    )
}