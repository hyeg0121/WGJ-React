import styles from '../../css/components/forms/MainButton.module.css';
import '../../css/style.css';
interface Props {
    handleOnClick: () => void;
    label: string;
}

export default function MainButton({ handleOnClick, label }: Props) {
    return (
        <>
            <button onClick={() => handleOnClick()} className={styles.main_button}>
                {label}
            </button>
        </>
    )
}