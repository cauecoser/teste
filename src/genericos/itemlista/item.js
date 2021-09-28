import './item.css'

function ItemLista(props){
    return (
        <li className='item'><img src={props.img} alt={props.alt}/>{props.nome}</li>
    )
}

export default ItemLista