import './banner.css'

function Banner(props){
    return(
        <div className='fundobanner' id={props.corbanner}>
            <div className='posfundo'>
                <div className='nomeplano'>{props.nomeplano}</div>
                <ul className='itensplano'>
                    <li className='item1'>{props.item1}</li>
                    <li className='item2'>{props.item2}</li>
                    <li className='item3'>{props.item3}</li>
                    <li className='item4'>{props.item4}</li>
                </ul>
            </div>
            <div className='precoano'>
                <p className='letrapequena1'>Anual</p>
                <div className='valorano'>{props.valorano}</div>
            </div>
            <div className='precomes'>
                <div className='letrapequena2'>Mensal</div>
                <div className='valormes'>{props.valormes}</div>
            </div>
            <button id={props.fundobotao} className='botaoquero' onClick={props.onclick}>QUERO ESTE</button>
        </div>
    )
}

export default Banner