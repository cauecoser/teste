import './App.css';
import ImgSection1 from './imgsection1/imgsection1';
import ImgSection2 from './imgsection2/imgsection2';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Topbar from './topbar/topbar';
import NovaTopbar from './novatopbar/topbar';
import logopequeno from './imagens/logo100x250.png'


function App() {
  let alimentaMenu = [
    {type: 'link', nome: 'Item 1', href: '/item1'},
    {type: 'link', nome: 'Item 2', href: '/item2'},
    {type: 'link', nome: 'Item 3', href: '/item3'},
    {type: 'link', nome: 'Item 4', href: '/item4'},
    {type: 'botao', nome: 'Botão', action: () => {alert("Botão")}}
]

  return (<>
  {/* Essa seria a nova topbar, onde remove toda a responsabilidade de criar os itens dentro dela, dentro do componente temos toda a lógica que monta o nosso componente, os valores que o alimentam, devem ser enviados de fora, como nesta, envio daqui a imagem, e envio daqui os dados dos links e botão, inclusive a função de alert, inicialmente não faz muito sentido, e aparenta ser mais trabalhoso, porém, para reutilizar, a unica coisa que precisamos é importar a topbar, e criar esse array de objetos que está acima, na variável alimentaMenu.*/}
  <NovaTopbar hasImage={{src: logopequeno}} itens={alimentaMenu}/>

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