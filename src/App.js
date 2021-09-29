import './App.css';
import ImgSection from './imgsection/imgsection';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
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
    <ImgSection 
        classimg='fundofazenda'
        classdiv='metadesection1'
        classp='ps1'
        textops1='Gerencie sua fazenda facilmente de forma EFICAZ!'
        classbotao='botaosection1' nomebotao='CONTRATE' onclick=''/>
    <Section1/>
    <Section2/>
  </>);
}

export default App;
