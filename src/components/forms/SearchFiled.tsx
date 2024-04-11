import styles from '../../css/components/forms/SearchFeild.module.css'
import '../../css/style.css'
export default function SearchFiled() {
  return (
    <div className={styles.container}>
      <input
        className={styles.search_field}
        type="text"
        placeholder="거지방을 검색하세요"
      />
    </div>
  )
}
