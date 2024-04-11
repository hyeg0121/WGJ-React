import axios from 'axios'
import {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import BottomNav from '../components/common/BottomNav'
import InputTextField from '../components/forms/InputTextField'
import MainButton from '../components/forms/MainButton'
import styles from '../css/page/CreateRoom.module.css'
import '../css/style.css'
import {RootState} from '../store'
import {RoomRequestData} from '../types/room'

export default function CreateRoom() {
  const navigation = useNavigate()
  const user = useSelector((state: RootState) => state.user)

  const [formData, setFormData] = useState<RoomRequestData>({
    creatorId: 1,
    name: '',
    description: '',
    capacity: 0
  })

  const handleNameChange = (value: string) => {
    setFormData({...formData, name: value})
  }

  const handleCapacityChange = (value: string) => {
    setFormData({...formData, capacity: Number(value)})
  }

  const handleDescriptionChange = (value: string) => {
    setFormData({...formData, description: value})
  }

  const handleRecord = useCallback(async () => {
    const request = {...formData}
    console.log(request)
    const response = await axios.post('http://localhost:8080/api/rooms', request)
    console.log(response)
    navigation('/home')
  }, [])

  return (
    <>
      <div className={styles.container}>
        <InputTextField
          type="text"
          placeholder="이름"
          handleOnChange={handleNameChange}
        />
        <InputTextField
          type="text"
          placeholder="설명"
          handleOnChange={handleDescriptionChange}
        />
        <InputTextField
          type="text"
          placeholder="인원수"
          handleOnChange={handleCapacityChange}
        />
        <MainButton handleOnClick={handleRecord} label="기록하기" />
      </div>
      <BottomNav currentMenu="post" />
    </>
  )
}
