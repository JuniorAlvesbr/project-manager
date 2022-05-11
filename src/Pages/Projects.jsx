import { useState } from 'react'
import Message from '../components/layout/Message'

import styles from './Projects.module.scss'

export default function Projects() {
    const [show, setShow] = useState(true)

    setInterval(() => {
        setShow(false)
    }, 5000)

    return (
        <div>
            <h1>Meus Projetos</h1>
            {show && <Message type="success" message="Projeto criado com sucesso" />}
        </div>
    )
}