import BannerPage from './components/BannerPage'
import ExpertisePage from './components/ExpertisePage'
import VisionPage from './components/VisionPage'
import VisionPage2 from './components/VisionPage2'
import DottedHR from './components/DottedHR'
import ServiceCard from './components/ServiceCard'





export default function Home() {
  return (
    <div >
      <BannerPage/>
      <ExpertisePage/>
      {/* <VisionPage/> */}
      {/* <DottedHR variant="fancy" colorStart="#F97316" colorEnd="#F43F5E" /> */}
      <VisionPage2/>
      <ServiceCard/>
    </div>
  );
}
