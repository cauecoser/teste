import Botao from '../genericos/botao/botao'
import './imgsection.css'

function Section1(props) {
    return(
        <div id='fundosection1' className={props.class}>
            <div className='metadesection1'>
                <p className='ps1'>Gerencie sua fazenda facilmente de forma EFICAZ!</p>
                <Botao class='botaosection1' nome='CONTRATE' onclick=''/>
            </div>
        </div>
    )
}

export default Section1