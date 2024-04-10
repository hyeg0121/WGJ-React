import styles from '../../css/components/item/RoomItem.module.css'

interface Props {
  name: string
}

export default function RoomItem({name}: Props) {
  return <div className={styles.container}>{name}</div>
}
