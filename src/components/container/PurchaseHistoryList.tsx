import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import {PostData} from '../../types/post'
import PurchaseHistoryItem from '../item/PurchaseHistoryItem'

export default function PurchaseHistoryList() {
  const [data, setData] = useState<PostData[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/1/posts`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {data.map((item, index) => (
        <PurchaseHistoryItem
          key={index}
          item={item.item}
          amount={item.amount}
          roomName={item.room.name}
        />
      ))}
    </>
  )
}
