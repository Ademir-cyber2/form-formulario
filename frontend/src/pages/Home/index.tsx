
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container-home'>
                <h1>Desafio Github API</h1>
                <h3>Bootcamp Spring React - DevSuperior</h3>
                <button className='btn'>
                    <h6>Começar</h6>
                </button>
            </div>
        </>

    );
}

export default Home;