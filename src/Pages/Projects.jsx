import { useState, useEffect } from 'react'
import LinkButton from '../components/layout/LinkButton'
import Message from '../components/layout/Message'
import Container from '../components/layout/Container'
import ProjectCard from '../components/project/ProjectCard'

import styles from './Projects.module.scss'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject">Criar Projetos</LinkButton>
            </div>
            <Message type="success" message="Projeto criado com sucesso" />
            <Container cusromClass="start">
                {projects.length > 0 && projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    />
                ))
                }
            </Container>
        </div>
    )
}