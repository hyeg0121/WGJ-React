import { useNavigate } from 'react-router-dom';
import { Reset } from 'styled-reset';
import MainButton from '../components/forms/MainButton';
import styles from '../css/page/Index.module.css';
import '../css/style.css';

export default function Index() {

    const navigation = useNavigate();

    const goToSignIn = () => navigation('/signin'); // navigation 함수를 직접 호출
    const goToSignUp = () => navigation('/signup');
    return (
        <div className='main_container'>
            <Reset />
            <div className={styles.title_container}>
                <h2 className={styles.sub_title}>우리는 거지가 지겹다</h2>
                <h1 className={styles.main_title}>우거지</h1>
            </div>
            <div className={styles.button_container}>
                <MainButton handleOnClick={goToSignIn} label='로그인' />
                <MainButton handleOnClick={goToSignUp} label='회원가입' />
            </div>
        </div>
    )
}
