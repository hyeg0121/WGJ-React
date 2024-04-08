import styles from '../../css/components/common/FloatingAddButton.module.css'

interface Props {
  handleOnClick: () => void
}

export default function FloatingAddButton({handleOnClick}: Props) {
  return (
    <button className={styles.floatingButton} onClick={handleOnClick}>
      +
    </button>
  )
}
