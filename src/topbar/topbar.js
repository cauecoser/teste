import './topbar.css'
import logopequeno from '../imagens/logo100x250.png'
import Botao from '../botao/botao'
import Link from '../link/link'

function Topbar(props){
    return(
        <div className='bkgd_top'>
            <img className='logotop' src={logopequeno} alt='logomedio'/>
            <div className='links_e_botao'>
                <Link nome='HOME' href=''/>
                <Link nome='BLOG' href=''/>
                <Link nome='SUPORTE' href=''/>
                <Link nome='PREÇOS' href=''/>
                <Link nome='CONTATO' href=''/>
                <Botao class='top_botao' nome='ENTRAR' onclick=''/>
            </div>
        </div>
    )
}

export default Topbar