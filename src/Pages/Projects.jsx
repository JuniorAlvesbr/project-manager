import LinkButton from '../components/layout/LinkButton'
import Message from '../components/layout/Message'
import Container from '../components/layout/Container'

import styles from './Projects.module.scss'

export default function Projects() {
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject">Criar Projetos</LinkButton>
            </div>
            <Message type="success" message="Projeto criado com sucesso" />
            <Container cusromClass="start">
                <p>Projetos ...</p>
            </Container>
        </div>
    )
}