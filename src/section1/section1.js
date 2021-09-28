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
                    <Lista class='listas1' nome='Alguns resultados alcançados:'>
                        <ItemLista nome='Reduzir nossos custos;'/>
                        <ItemLista nome='Aumentar nossos rendimentos;'/>
                        <ItemLista nome='Reduzir a mortalidade do rebanho;'/>
                        <ItemLista nome='Gerenciar manejos inteligentes;'/>
                        <ItemLista nome='previsões mais fidedignas para monta e parição.'/>
                    </Lista>
                </div>
                <div className='botaos1'><Botao class='botaos1' nome='SAIBA MAIS' onclick=''></Botao></div>
            </div>
        </div>
    )
}

export default Section1