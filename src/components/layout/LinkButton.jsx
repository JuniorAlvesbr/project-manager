import { Link } from 'react-router-dom'
import styles from './LinkButton.module.scss'

export default function LinkButton({ to, children }) {
    return (
        <Link className={styles.btn} to={to}>{children}</Link>
    )
}