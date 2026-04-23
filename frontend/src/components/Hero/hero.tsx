import heroImage from '../../assets/images/hero.png';
import './hero.css';
import MyButton from "../Button/button"

function Hero(){
    return (
        <section className="hero">
            <div className="texts">
                <p>Sua vida é importante</p>
                <h1>Bem-vindo ao Hospital App</h1>
                <MyButton name="Agende sua consulta" className="btnhero"/>
            </div>
            <div className='heroimg'>
                <img src={heroImage} alt="Hero Image" />
            </div>
        </section>
    )
}

export default Hero;