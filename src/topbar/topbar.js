import './topbar.css'
import Botao from '../genericos/botao/botao'
import Link from '../genericos/link/link'

function Topbar(props){
    return(
        <div className='bkgd_top'>
            <img className='logotop' src='' alt='logomedio'/>
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