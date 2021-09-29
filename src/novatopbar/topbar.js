import Botao from '../genericos/botao/botao';
import Link from '../genericos/link/link';
import './novatopbar.css'

function NovaTopbar(props){
    let hasImageObj = props.hasImage
    let logoBarra = null;
    let itensMenu = [];
    if (props.hasImage) {
        logoBarra = <img src={hasImageObj.src} />
    }

    props.itens.map(i => {
        if(i.type === 'link') {
            itensMenu.push(<Link nome={i.nome} href={i.href} />)
        } else if(i.type === 'botao') {
            itensMenu.push(<Botao class='top_botao' nome={i.nome} onclick={i.action}/>)
        }
    })

    return(
        <div className='bkgd_top'>
            {logoBarra}
            <div className='links_e_botao'>
                {itensMenu}
            </div>
        </div>
    )
}

export default NovaTopbar;