import './App.css';
import ImgSection from './imgsection/imgsection';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Topbar from './topbar/topbar';


function App() {
  return (<>
    <Topbar/>
    <ImgSection/>
    <Section1/>
    <Section2/>
    <Section3/>
  </>);
}

export default App;