import apppng from '../imagens/app.png'
import iconetic from '../imagens/iconetic.png'
import ItemLista from '../itemlista/item.js'
import Lista from '../lista/lista'
import './section2.css'

function Section2(){
    return (
        <div className='principals2'>
            <div className='cimas2'>
                <div className='t1s2'>Contamos com um sistema integrado WEB / Mobile</div>
            </div>
            <div className='baixos2'>
                <div className='t2s2'><img src={apppng} alt='app'/></div>
                <Lista class='listas2'>
                    <ItemLista img={iconetic} alt='tic' nome='Crie atividades para seus colaboradores, e eles recebem no celular;'/>
                    <ItemLista img={iconetic} alt='tic' nome='Veja as atividades no manejo do seu computador;'/>
                    <ItemLista img={iconetic} alt='tic' nome='Gerencie e acompanhe tudo que acontece no pasto sem sair do seu escritório;'/>
                    <ItemLista img={iconetic} alt='tic' nome='Gere relatórios com todas as informações recebidas.'/>
                </Lista>
            </div>
        </div>
    )
}

export default Section2