import styles from './Select.module.scss'

export default function Select({ name, text, categories, value, handleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}
            </label>

            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                {categories.map((categorie) => (
                    <option value={categorie.name} key={categorie.id}>{categorie.name}</option>
                ))}
            </select>
        </div>
    )
}