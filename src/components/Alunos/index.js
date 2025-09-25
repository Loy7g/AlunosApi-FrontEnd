import React, {useState, useEffect}from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

import {FiPower, FiEdit, FiUserX} from 'react-icons/fi'
import logoCadastro from '../../assets/login.png';

export default function Alunos() {

    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState([]);

    const [alunos, setAlunos] = useState([]);

     const email = localStorage.getItem('email');
     const token = localStorage.getItem('token');

     const navigate = useNavigate();

     const authorization = {
          headers: {
                Authorization: `Bearer ${token}`
          }
     }

     const searchAlunos = (searchValue) => {
          setSearchInput(searchValue);
          if (searchValue !== '') {
                const dadosFiltrados = alunos.filter((item) => {
                     return Object.values(item).join('').toLowerCase()
                     .includes(searchValue.toLowerCase())
                });
                setFilter(dadosFiltrados)
          } else{
                setFilter(alunos)
          }
     }

     useEffect( ()=> {
          api.get('/api/Alunos',authorization).then(
                response=> {setAlunos(response.data)}
          ).catch(error => {
                console.error('Erro ao carregar alunos:', error);
          });
     }, []);

     async function handleLogout(){
          try{
                localStorage.clear();
                localStorage.setItem('token','');
                authorization.headers = '';
                navigate('/');

          }catch(error){
                alert("Erro ao realizar logout:", error);
          }
     }

     async function editAluno(id){
          try{
                navigate(`/aluno/novo/${id}`);
          }catch(error){
                alert("Erro ao editar aluno:", error);
          }
     }

     async function deleteAluno(id){
          try{
                if(window.confirm('Deseja realmente excluir este aluno?')){
                     await api.delete(`/api/Alunos/${id}`, authorization);
                     setAlunos(alunos.filter(aluno => aluno.id !== id));
                }
          }catch(error){
                alert("Erro ao excluir aluno:", error);
          }
     }

     return (
          <div className="aluno-container">
                <header>
                     <img src={logoCadastro} alt="Cadastro" />
                     <span>Bem-Vindo, <strong>{email}</strong></span>
                     <Link className='button' to="/aluno/novo/0">Cadastrar novo aluno</Link>
                     <button onClick={handleLogout} type="button">
                          <FiPower size={20} />
                          <span>Logout</span>
                     </button>
                </header>
                <form>
                     <input type='text' placeholder='Filtrar por nome...'
                          onChange={(e) => searchAlunos(e.target.value)}
                     />
                </form>
                <h1>Alunos Cadastrados</h1>
                <ul>
                     {(searchInput.length > 0 ? filter : alunos).map(aluno=>(
                          <li key={aluno.id}>
                                <div className="aluno-info">
                                     <p><b>Nome:</b> {aluno.nome}</p>
                                     <p><b>Idade:</b> {aluno.idade} anos</p>
                                     <p><b>Email:</b> {aluno.email}</p>
                                </div>
                                <div className="actions">
                                     <button onClick={() => editAluno(aluno.id)} type="button" title="Editar aluno">
                                          <FiEdit size="18" color="#00d4ff" />
                                     </button>
                                     <button onClick={() => deleteAluno(aluno.id)} type="button" title="Excluir aluno">
                                          <FiUserX size="18" color="#ff6b9d" />
                                     </button>
                                </div>
                          </li>
                     ))}
                </ul>
          </div>
     );
}
