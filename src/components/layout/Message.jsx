import { useState } from 'react'
import styles from './Message.module.scss'

export default function Message({ type, message }) {
    const [show, setShow] = useState(true)

    setInterval(() => {
        setShow(false)
    }, 5000)

    return (
        <>
            {show && <p className={`${styles.message} ${styles[type]}`}>{message}</p>}
        </>
    )
}