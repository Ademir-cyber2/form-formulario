
import axios from 'axios';
import Navbar from 'components/Navbar';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
    busca: string;
}

type Address = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}

const Busca = () => {

    const [address, setAddress] = useState<Address>();

    const [formData, setFormData] = useState<FormData>({ busca: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.busca}`).then((response) => {
            setAddress(response.data);
            console.log(response.data);
        })
            .catch((error) => {
                setAddress(undefined);
                console.log(error);
            });
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='container-main'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <h2 className='titulo'>Encontre um perfil no Github</h2>
                            <input
                                type="text"
                                name='busca'
                                value={formData.busca}
                                className="input-search"
                                placeholder="Digite o nome aqui!"
                                onChange={handleChange} />
                            <button type='submit' className='btn' >
                                Encontrar
                            </button>
                        </div>
                    </form>

                    {address &&
                        <>
                            <div className='formulario'>
                                <div className='avatar'>
                                    <img src={address.avatar_url} alt="imagem do avatar" />

                                </div>
                                <div className='resultCard'>
                                    <h2>Informações</h2>
                                    <ResultCard title="Perfil :" description={address.url} />
                                    <ResultCard title='Sequidores :' description={address.followers} />
                                    <ResultCard title="Localidade :" description={address.location} />
                                    <ResultCard title="Nome :" description={address.name} />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>

    );
}

export default Busca;