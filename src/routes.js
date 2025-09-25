import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Alunos from './components/Alunos';
import NovoAluno from './components/NovoAluno';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/aluno/novo/:alunoId" element={<NovoAluno />} />
            </Routes>
        </BrowserRouter>
    );
}

   