import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputTextField from '../components/forms/InputTextField';
import MainButton from '../components/forms/MainButton';
import '../css/style.css';

export default function SignIn() {
    const navigation = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const request = {
                email,
                password
            }
            console.log(request);
            const response = await axios.post(`http://localhost:8080/api/users/login`, request);

            if (response.status === 200) navigation('/home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='main_container'>
            <h1>로그인</h1>
            <InputTextField type='text' placeholder='이메일' handleOnChange={setEmail}/>
            <InputTextField type='text' placeholder='비밀번호' handleOnChange={setPassword}/>
            <MainButton label='로그인' handleOnClick={handleSignIn}/>
        </div>
    )
}