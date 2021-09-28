import './lista.css'

function Lista(props){
    return(
        <ul className={props.class}>{props.children}</ul>
    )
}

export default Lista