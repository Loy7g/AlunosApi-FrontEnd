# 🎓 Sistema de Gerenciamento de Alunos

Um sistema moderno e elegante para gerenciamento de alunos, desenvolvido com React e design futurista. O projeto oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) com uma interface visual impressionante.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## ✨ Características Principais

### 🎨 Design Futurista
- **Interface Glass Morphism**: Elementos translúcidos com efeito de vidro
- **Gradientes Animados**: Cores vibrantes com transições suaves
- **Animações CSS**: Efeitos de hover, pulso e movimento
- **Tipografia Orbitron**: Fonte futurística para elementos importantes
- **Tema Cyberpunk**: Paleta de cores azul neon, roxo e rosa vibrante

### 🔐 Sistema de Autenticação
- Login seguro com JWT Token
- Validação de sessão
- Proteção de rotas privadas
- Logout com limpeza de cache

### 👥 Gerenciamento de Alunos
- **Listagem**: Visualização de todos os alunos em cards elegantes
- **Busca**: Sistema de pesquisa em tempo real
- **Cadastro**: Formulário para novos alunos
- **Edição**: Atualização de dados existentes
- **Exclusão**: Remoção com confirmação

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1**: Framework JavaScript moderno
- **React Router DOM 7.9.1**: Navegação entre páginas
- **React Icons 5.5.0**: Ícones elegantes
- **Axios 1.12.2**: Cliente HTTP para API

### Styling
- **CSS3 Moderno**: Grid, Flexbox, Animations
- **Google Fonts**: Orbitron para tipografia futurista
- **Gradientes CSS**: Efeitos visuais avançados
- **Backdrop Filter**: Efeitos de blur e transparência

### Backend Integration
- **API REST**: Comunicação com backend .NET
- **JWT Authentication**: Autenticação baseada em tokens
- **HTTPS**: Conexão segura (localhost:7245)

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Backend API rodando na porta 7245

### Passo a Passo

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd clientereact
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure a API**
   - Certifique-se de que o backend está rodando em `https://localhost:7245/`
   - Verifique os endpoints em `src/services/api.js`

4. **Execute o projeto**
```bash
npm start
```

5. **Acesse no navegador**
   - URL: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
clientereact/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Login/
│   │   │   ├── index.js          # Componente de Login
│   │   │   └── styles.css        # Estilos futuristas do login
│   │   ├── Alunos/
│   │   │   ├── index.js          # Listagem de alunos
│   │   │   └── styles.css        # Estilos da listagem
│   │   └── NovoAluno/
│   │       ├── index.js          # Cadastro/Edição de alunos
│   │       └── styles.css        # Estilos do formulário
│   ├── services/
│   │   └── api.js                # Configuração do Axios
│   ├── assets/
│   │   └── login.png             # Imagens do projeto
│   ├── App.js                    # Componente principal
│   ├── Global.css                # Estilos globais
│   └── index.js                  # Ponto de entrada
├── package.json
└── README.md
```

## 🎯 Funcionalidades Detalhadas

### 🔑 Tela de Login
- Design glass morphism com fundo aurora
- Campos de email e senha com animações
- Botão com gradiente e efeitos hover
- Validação e feedback de erro
- Redirecionamento automático após login

### 📊 Dashboard de Alunos
- Cards responsivos com informações dos alunos
- Sistema de busca em tempo real
- Botões de ação (editar/excluir) com ícones
- Header com informações do usuário logado
- Botão de logout com confirmação

### ➕ Cadastro/Edição
- Formulário dinâmico (cadastro ou edição)
- Campos: Nome, Idade, Email
- Validação de dados
- Feedback visual de sucesso/erro
- Navegação intuitiva

## 🎨 Paleta de Cores

```css
/* Cores Principais */
Azul Neon: #00d4ff
Roxo Primário: #6366f1
Roxo Secundário: #8b5cf6
Rosa Vibrante: #ff6b9d
Pink Accent: #ec4899

/* Backgrounds */
Azul Escuro: #0f0f23
Azul Médio: #1a1a2e
Azul Profundo: #16213e
Azul Royal: #0f3460
Roxo Profundo: #533483
```

## 🔧 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm start

# Cria build para produção
npm run build

# Executa os testes
npm test

# Ejeta as configurações (irreversível)
npm run eject
```

## 📱 Responsividade

O projeto foi desenvolvido com design responsivo:
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Interface adaptada para telas médias
- **Mobile**: Layout otimizado para dispositivos móveis

## 🔒 Segurança

- Autenticação JWT
- Tokens armazenados localmente
- Validação de sessão em cada requisição
- Proteção contra acesso não autorizado
- HTTPS para comunicação com API

## 🚀 Próximas Funcionalidades

- [ ] Paginação na listagem de alunos
- [ ] Filtros avançados de busca
- [ ] Upload de foto do aluno
- [ ] Relatórios em PDF
- [ ] Tema dark/light mode
- [ ] Notificações push
- [ ] Cache offline

