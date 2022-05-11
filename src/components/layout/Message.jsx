import styles from './Message.module.scss'

export default function Message({ type, message }) {


    return (
        <p className={`${styles.message} ${styles[type]}`}>{message}</p>
    )
}