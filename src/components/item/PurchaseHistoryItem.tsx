import styles from '../../css/components/item/PurchaseHistoryItem.module.css'

interface Props {
  item: string
  amount: number
  roomName: string
}

export default function PurchaseHistoryItem({item, amount, roomName}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.item}>{item}</div>
        <div className={styles.amount}>{amount}원</div>
      </div>
      <div className={styles.room}>#{roomName}</div>
    </div>
  )
}
