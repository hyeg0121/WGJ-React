import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import {RoomData} from '../../types/room'
import RoomItem from '../item/RoomItem'

export default function RoomList() {
  const [data, setData] = useState<RoomData[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/1/rooms`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {data.map((item, index) => (
        <RoomItem key={index} name={item.name} />
      ))}
    </>
  )
}
