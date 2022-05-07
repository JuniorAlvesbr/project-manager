import styles from './Input.module.scss'

export default function Input({ type, name, text, value, placeholder, handleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={handleOnChange}
            />

        </div>
    )
}