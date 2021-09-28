import './App.css';
import ImgSection from './imgsection/imgsection';
import Section1 from './section1/section1';
import Topbar from './topbar/topbar';


function App() {
  return (<>
    <Topbar/>
    <ImgSection 
        classimg='fundofazenda'
        classdiv='metadesection1'
        classp='ps1'
        textops1='Gerencie sua fazenda facilmente de forma EFICAZ!'
        classbotao='botaosection1' nomebotao='CONTRATE' onclick=''/>
    <Section1/>
  </>);
}

export default App;
