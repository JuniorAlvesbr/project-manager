import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.scss'

export default function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, [])

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
            <Select name="categoria_id" text="Seleciona a categoria" categories={categories} />
            <SubmitButton text={btnText} />
        </form>
    )
}