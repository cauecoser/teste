import './lista.css'

function Lista(props){
    return(
        <ul className={props.class}>{props.nome}{props.children}</ul>
    )
}

export default Lista