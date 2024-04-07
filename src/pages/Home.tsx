import BottomNav from '../components/common/BottomNav'
import SectionTitle from '../components/common/SectionTitle'
import HomeTitle from '../components/home/HomeTitle'
import '../css/style.css'
export default function Home() {
  return (
    <>
      <HomeTitle userName="황혜경" amount={30000} tag="아가리 저축러에서 벗어나자" />
      <SectionTitle title="최근 나의 소비 내역" />
      <BottomNav currentMenu="home" />
      <SectionTitle title="나의 거지방 소식" />
    </>
  )
}
