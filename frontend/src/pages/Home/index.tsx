
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container-home'>
                <h1>Desafio Github API</h1>
                <h3>Bootcamp Spring React - DevSuperior</h3>
                <Link to="/Busca">
                    <button className='btn'><h6>Começar</h6></button>
                </Link>
            </div>
        </>

    );
}

export default Home;