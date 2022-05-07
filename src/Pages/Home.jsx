import styles from './Home.module.scss'
import savings from '../img/savings.svg'
import LinkButton from '../components/layout/LinkButton'

export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os sues projetos agora mesmo!</p>
            <LinkButton to="/newproject">Criar Projetos</LinkButton>
            <img src={savings} alt="costs" />
        </section>
    )
}