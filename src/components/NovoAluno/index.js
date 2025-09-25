import React, {useEffect, useState, useMemo} from 'react'
import './styles.css';
import {FiArrowLeft, FiUserPlus} from 'react-icons/fi'
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';


export default function NovoAluno(){

    const[id, setId] = useState(null);
    const[nome, setNome] = useState('');
    const[idade, setIdade] = useState('');
    const[email, setEmail] = useState('');

    const {alunoId} = useParams();
    const navigate = useNavigate();


    const token = localStorage.getItem('token');

    const authorization = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${token}`
        }
    }), [token]);

    useEffect( () => {
        async function loadAluno(){
            try{
                const response = await api.get(`/api/Alunos/${alunoId}`, authorization);

                setId(response.data.id);
                setNome(response.data.nome);
                setIdade(response.data.idade);
                setEmail(response.data.email);

            }catch(error){
                alert('Erro ao carregar aluno:', error);
                navigate('/alunos');
            }
        }

        if(alunoId === '0')
            return;
        else
            loadAluno();
    }, [alunoId, authorization, navigate]);

    async function saveOrUpdate(e){
        e.preventDefault();

        const data = {
            nome,
            idade,
            email
        }

        try{
            if(alunoId === '0'){
                await api.post('/api/Alunos', data, authorization);
            }else{
                data.id = id;
                await api.put(`/api/Alunos/${alunoId}`, data, authorization);
            }
            
        }catch(error){
            alert('Erro ao salvar aluno:', error);
        }
        navigate('/alunos');
    }

    return(
        <div className="novo-aluno-container">
            <div className="content">
                
                <section className='form'>
                <FiUserPlus size="80" color="#6366f1" />
                <h1>{alunoId === '0' ? 'Cadastrar Novo Aluno' : 'Editar Aluno'}</h1>
                <p>Preencha os dados abaixo para {alunoId === '0' ? 'cadastrar um novo' : 'editar o'} aluno no sistema.</p>
                <Link className="back-link" to="/alunos">
                    
                    Retornar
                </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input placeholder='Nome' 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                    <input placeholder='Idade' 
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                    />
                    <input placeholder='Email' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <button className='button' type='submit'>{alunoId === '0' ? 'Cadastrar' : 'Salvar'}</button>
                </form>

                
            </div>
        </div>
    );
}