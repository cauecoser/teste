import './App.css';
import ImgSection1 from './imgsection1/imgsection1';
import ImgSection2 from './imgsection2/imgsection2';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Topbar from './topbar/topbar';


function App() {
  return (<>
    <Topbar/>
    <ImgSection1/>
    <Section1/>
    <Section2/>
    <Section3/>
    <ImgSection2/>
    <Section4/>
  </>);
}

export default App;