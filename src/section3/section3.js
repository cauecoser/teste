import './section3.css'
import Banner from '../banner/banner'

function Section3(props) {
    return(
        <div className='divfinal'>
            <Banner
                nomeplano='START'
                item1='Até 500 animais'
                item2='Até 10 usuários'
                item3='01 usuário administrador'
                item4='01 usuário gerente'
                valorano='R$264,00'
                valormes='R$22,00'
                corbanner='banneramar'
                fundobotao='botaoamar'/>
            <Banner
                nomeplano='PLUS'
                item1='Até 1500 animais'
                item2='Até 20 usuários'
                item3='02 usuários administradores'
                item4='03 usuários gerentes'
                valorano='R$384,00'
                valormes='R$32,00'
                corbanner='bannerverm'
                fundobotao='botaoverm'/>
            <Banner
                nomeplano='MASTER'
                item1='Animais ilimitados'
                item2='Usuários ilimitados'
                item3='10 usuários administradores'
                item4='15 usuários gerentes'
                valorano='R$456,00'
                valormes='R$38,00'
                corbanner='bannerverd'
                fundobotao='botaoverd'/>
        </div>
    )
}

export default Section3