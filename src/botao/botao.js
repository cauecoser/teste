import './botao.css'

function Botao(props) {
    return (
        <button id='botaogen' className={props.class} onClick={props.onclick}>{props.nome}</button>
    )
}

export default Botao