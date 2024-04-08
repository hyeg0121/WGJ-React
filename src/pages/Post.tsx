import axios from 'axios'
import {useCallback, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import BottomNav from '../components/common/BottomNav'
import InputTextField from '../components/forms/InputTextField'
import MainButton from '../components/forms/MainButton'
import GroupSelect from '../components/post/GroupSelect'
import styles from '../css/page/Post.module.css'
import '../css/style.css'
import {PostRequestData} from '../types/post'

export default function Post() {
  const navigation = useNavigate()

  const [formData, setFormData] = useState<PostRequestData>({
    authorId: 1,
    roomId: 0,
    amount: 0,
    item: '',
    content: ''
  })

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({...formData, roomId: Number(event.target.value)})
  }

  const handleItemChange = (value: string) => {
    setFormData({...formData, item: value})
  }

  const handleAmountChange = (value: string) => {
    setFormData({...formData, amount: Number(value)})
  }

  const handleContentChange = (value: string) => {
    setFormData({...formData, content: value})
  }

  const handleRecord = useCallback(async () => {
    const request = {...formData}
    console.log(request)
    const response = await axios.post('http://localhost:8080/api/posts', request)
    console.log(response)
    navigation('/home')
  }, [])

  return (
    <>
      <div className={styles.container}>
        <GroupSelect handleGroupChange={handleGroupChange} />
        <InputTextField
          type="text"
          placeholder="소비 물품"
          handleOnChange={handleItemChange}
        />
        <InputTextField
          type="text"
          placeholder="가격"
          handleOnChange={handleAmountChange}
        />
        <InputTextField
          type="text"
          placeholder="메모"
          handleOnChange={handleContentChange}
        />
        <MainButton handleOnClick={handleRecord} label="기록하기" />
      </div>
      <BottomNav currentMenu="post" />
    </>
  )
}
