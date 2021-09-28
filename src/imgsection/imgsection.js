import Botao from '../genericos/botao/botao'

function ImgSection(props) {
    return(
        <div className={props.classimg}>
            <div class={props.classdiv}>
                <p className={props.classp}>{props.textops1}</p>
                <Botao class={props.classbotao} nome={props.nomebotao}/>
            </div>
        </div>
    )
}

export default ImgSection