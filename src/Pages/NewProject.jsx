import styles from './NewProject.module.scss'

import ProjectForm from '../components/project/ProjectForm'

export default function NewProject() {

    const createPost = async (project) => {
        const response = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        return response.json()
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projetos" handleSubmit={createPost} />
        </div>
    )
}