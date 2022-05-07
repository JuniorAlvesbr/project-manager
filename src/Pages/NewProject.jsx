import styles from './NewProject.module.scss'

import ProjectForm from '../components/project/ProjectForm'

export default function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projetos" />
        </div>
    )
}