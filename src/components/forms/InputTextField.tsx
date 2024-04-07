import styles from '../../css/components/forms/InputTextField.module.css';

interface Props {
    type: string;
    placeholder: string;
    handleOnChange: (value: string) => void;
}

export default function InputTextField({ type, placeholder, handleOnChange}: Props) {
    return (
        <input 
            type={type}
            placeholder={placeholder} 
            className={styles.main_input}
            onChange={e => handleOnChange(e.target.value)}
            />
    )
}