import Botao from '../genericos/botao/botao'
import ItemLista from '../genericos/itemlista/item'
import Lista from '../genericos/lista/lista'
import './section1.css'

function Section1(props){
    return (
        <div className='principals1'>
            <div className='esquerdas1'>
                <div className='t1s1'>iFazendas é feito por quem vive isso.</div>
                <div className='t2s1'>Criamos um sistema para a nossa fazenda. Ficou tão bom que queremos dividir com você!</div>
            </div>
            <div className='direitas1'>
                <div className='divlistas1'>
                    <p className='titlistas1'>Alguns resultados alcançados:</p>
                    <Lista class='listas1'>
                        <ItemLista img='src/imagens/logomao.png' nome='Reduzir nossos custos;'/>
                        <ItemLista img='src/imagens/logomao.png' nome='Aumentar nossos rendimentos;'/>
                        <ItemLista img='src/imagens/logomao.png' nome='Reduzir a mortalidade do rebanho;'/>
                        <ItemLista img='src/imagens/logomao.png' nome='Gerenciar manejos inteligentes;'/>
                        <ItemLista img='src/imagens/logomao.png' nome='previsões mais fidedignas para monta e parição.'/>
                    </Lista>
                </div>
                <div className='botaos1'><Botao class='botaos1' nome='SAIBA MAIS' onclick=''></Botao></div>
            </div>
        </div>
    )
}

export default Section1