import styles from '../../css/components/home/HomeTitle.module.css'

interface Props {
  userName: string
  amount: number
  tag: string
}

export default function HomeTitle({userName, amount, tag}: Props) {
  return (
    <div className={styles.title_container}>
      <hr className={styles.divider} />
      <div className={styles.text}>
        <div className={styles.top_title}>
          {userName}님의
          <br />
          지금까지 소비내역
        </div>
        <div className={styles.bottom_info}>
          <span className={styles.amount}>{amount}원</span>
          <span className={styles.tag}>#{tag}</span>
        </div>
      </div>
    </div>
  )
}
