import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import styles from '../../css/components/post/GroupSelect.module.css'
import {RoomData} from '../../types/room'

interface Props {
  handleGroupChange: (event: any) => void
}

export default function GroupSelect({handleGroupChange}: Props) {
  const [data, setData] = useState<RoomData[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/1/rooms`)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <select className={styles.select} onChange={handleGroupChange}>
      <option value="">거지방</option>
      {data.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
