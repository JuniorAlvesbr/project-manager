import Input from '../Form/input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

import styles from './ProjectForm.module.scss'

export default function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do seu projeto"
            />
            <Input
                type="Number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select name="categoria_id" text="Seleciona a categoria" />
            <SubmitButton text={btnText} />
        </form>
    )
}