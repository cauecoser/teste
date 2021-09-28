import iconemao from '../imagens/iconemao.png'
import  iconegrafico1 from '../imagens/iconegrafico1.png'
import iconegrafico2 from '../imagens/iconegrafico2.png'
import iconeengrenagem from '../imagens/iconeengrenagem.png'
import iconealvo from '../imagens/iconealvo.png'
import Botao from '../genericos/botao/botao'
import ItemLista from '../genericos/itemlista/item'
import Lista from '../genericos/lista/lista'
import './section1.css'

function Section1(){
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
                        <ItemLista img={iconemao} nome='Reduzir nossos custos;'/>
                        <ItemLista img={iconegrafico1} nome='Aumentar nossos rendimentos;'/>
                        <ItemLista img={iconegrafico2} nome='Reduzir a mortalidade do rebanho;'/>
                        <ItemLista img={iconeengrenagem} nome='Gerenciar manejos inteligentes;'/>
                        <ItemLista img={iconealvo} nome='Previsões mais fidedignas para monta e parição.'/>
                    </Lista>
                </div>
                <div className='botaos1'><Botao class='botaos1' nome='SAIBA MAIS' onclick=''></Botao></div>
            </div>
        </div>
    )
}

export default Section1