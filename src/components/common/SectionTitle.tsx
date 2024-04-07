import styles from '../../css/components/common/SectionTitle.module.css'

interface Props {
  title: string
}

export default function SectionTitle({title}: Props) {
  return <div className={styles.section_title}>{title}</div>
}
