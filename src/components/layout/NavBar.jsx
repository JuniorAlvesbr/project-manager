import { Link } from 'react-router-dom'
import Container from './Container'

import image from '../../img/costs_logo.png'

import styles from './NavBar.module.scss'

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to="/">
                    <img src={image} alt="Logo da costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/project">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>

    )
}
