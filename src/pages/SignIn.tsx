import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import InputTextField from '../components/forms/InputTextField'
import MainButton from '../components/forms/MainButton'
import styles from '../css/page/SignIn.module.css'
import '../css/style.css'

export default function SignIn() {
  const navigation = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    try {
      const request = {
        email,
        password
      }
      console.log(request)
      const response = await axios.post(`http://localhost:8080/api/users/login`, request)

      if (response.status === 200) navigation('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="main_container">
      <h1 className={styles.main_title}>로그인</h1>
      <div className={styles.form_container}>
        <InputTextField type="text" placeholder="이메일" handleOnChange={setEmail} />
        <InputTextField
          type="password"
          placeholder="비밀번호"
          handleOnChange={setPassword}
        />
        <MainButton label="로그인" handleOnClick={handleSignIn} />
      </div>
    </div>
  )
}
