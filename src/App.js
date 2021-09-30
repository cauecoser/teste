import './App.css';
import ImgSection1 from './imgsection1/imgsection1';
import ImgSection2 from './imgsection2/imgsection2';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Topbar from './topbar/topbar';
import NovaTB from './novatopbar/novatb';
import logopequeno from './imagens/logo50x200.png'


function App() {
  
  let grupontb = [
    {class:'linkntb', hrefntb:'/home', nomentb:'HOME'},
    {class:'linkntb', hrefntb:'/blog', nomentb:'BLOG'},
    {class:'linkntb', hrefntb:'/suporte', nomentb:'SUPORTE'},
    {class:'linkntb', hrefntb:'/precos', nomentb:'PREÇOS'},
    {class:'linkntb', hrefntb:'/contato', nomentb:'CONTATO'},
    {class:'botaontb', onclickntb:'alert("Entrou!")', nomentb:'ENTRAR'}
  ]
  
  
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

/*    <Topbar/> */
/*    <NovaTB itens={grupontb} src={logopequeno}/> */
