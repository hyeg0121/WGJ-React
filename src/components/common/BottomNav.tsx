import {Link} from 'react-router-dom'
import styles from '../../css/components/common/BottomNav.module.css'

interface Props {
  currentMenu: string
}

export default function BottomNav({currentMenu}: Props) {
  return (
    <div className={styles.nav_container}>
      <Link to="/home" className={styles.nav_item}>
        <img
          src={
            currentMenu === 'home'
              ? '../images/nav/home-focus.png'
              : '../images/nav/home.png'
          }
          alt=""
          className={styles.nav_img}
        />
        <span
          className={currentMenu === 'home' ? styles.nav_name_focused : styles.nav_name}>
          홈
        </span>
      </Link>
      <Link to="/post" className={styles.nav_item}>
        <img
          src={
            currentMenu === 'post'
              ? '../images/nav/post-focus.png'
              : '../images/nav/post.png'
          }
          alt=""
          className={styles.nav_img}
        />
        <span
          className={currentMenu === 'post' ? styles.nav_name_focused : styles.nav_name}>
          기록
        </span>
      </Link>
      <Link to="/room" className={styles.nav_item}>
        <img
          src={
            currentMenu === 'room'
              ? '../images/nav/room-focus.png'
              : '../images/nav/room.png'
          }
          alt=""
          className={styles.nav_img}
        />
        <span
          className={currentMenu === 'room' ? styles.nav_name_focused : styles.nav_name}>
          거지방
        </span>
      </Link>
      <Link to="/profile" className={styles.nav_item}>
        <img
          src={
            currentMenu === 'profile'
              ? '../images/nav/profile-focus.png'
              : '../images/nav/profile.png'
          }
          alt=""
          className={styles.nav_img}
        />
        <span
          className={
            currentMenu === 'profile' ? styles.nav_name_focused : styles.nav_name
          }>
          프로필
        </span>
      </Link>
    </div>
  )
}
