import './link.css'

function Link(props){
    return(
        <a id='linkgen' className={props.class} href={props.href}>{props.nome}</a>
    )
}

export default Link