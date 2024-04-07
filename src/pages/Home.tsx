import BottomNav from '../components/common/BottomNav'
import HomeTitle from '../components/home/HomeTitle'
import '../css/style.css'
export default function Home() {
  return (
    <>
      <HomeTitle userName="황혜경" amount={30000} tag="아가리 저축러에서 벗어나자" />
      <BottomNav currentMenu="home" />
    </>
  )
}
