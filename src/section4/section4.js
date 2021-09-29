import './section4.css'
import logopequeno from '../imagens/logo50x200.png'
import youtube from '../imagens/youtube.png'
import twitter from '../imagens/twitter.png'
import linkedin from '../imagens/linkedin.png'
import instagram from '../imagens/instagram.png' 

function Section4(props) {
    return(<>
        <div className='fundos4'>
            <div className='logopequeno'>
                <img src={logopequeno}/>
            </div>
            <div className='social'>
                <a href=''><img className='iconesocial' src={youtube}/></a>
                <a href=''><img className='iconesocial' src={twitter}/></a>
                <a href=''><img className='iconesocial' src={linkedin}/></a>
                <a href=''><img className='iconesocial' src={instagram}/></a>
            </div>
            <div className='s4foot'>iFazendas 2021 - Todos os direitos reservados.</div>
        </div>
    </>)
}

export default Section4