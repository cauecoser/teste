import './novatb.css'
import Link from '../link/link'
import Botao from '../botao/botao'
import logopequeno from '../imagens/logo50x200.png'

function NovaTB(props) {
    
    let logobarra = null
    let blocontb = []

    if (logopequeno) {
        logobarra = <img src={logopequeno}/>
    }

    props.itens.map(x => {
        if(x.class==='linkntb') {
            blocontb.push(<Link href={x.hrefntb} nome={x.nomentb}/>)
        } else if (x.class==='botaontb') {
            blocontb.push(<Botao onclickntb={x.onclick} nome={x.nomentb}/>)
        }
    })

    return (
        <div className='divntb'>
            {logobarra}
            <div className='divblocontb'>
                {blocontb}
            </div>
        </div>
    )
}

export default NovaTB