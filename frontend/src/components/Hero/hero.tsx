import heroImage from '../../assets/images/hero.png';
import './hero.css';

function Hero(){
    return (
        <section className="hero">
            <div className="texts">
                <p>Sua vida é importante</p>
                <h1>Bem-vindo ao Hospital App</h1>
                <button className="btn">Agende sua consulta</button>
            </div>
            <div className='heroimg'>
                <img src={heroImage} alt="Hero Image" />
            </div>
        </section>
    )
}

export default Hero;