import axios from 'axios'; // Importa a biblioteca Axios para fazer requisições HTTP.
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado local.
import Logo from './logo-cangame.png'; // Importa uma imagem de logo do diretório especificado.
import CarrosselPremios from './CarrosselPremios'; // Importa o componente CarrosselPremios do diretório especificado.
import InputLogin  from './InputLogin'; // Importa o componente InputField do diretório especificado.

function Login() {
  // Estados locais para nome, senha, mensagem de erro e informações do usuário.
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState(null);

  // Função para lidar com o login.
  const handleLogin = async (evento) => {
    evento.preventDefault(); // Previne o recarregamento da página.

    try {
      // Faz uma requisição POST com os dados de login.
      const response = await axios.post(
        'http://localhost:3000/login',
        JSON.stringify({ nome, senha }),
        { headers: { 'Content-Type': 'application/json' }}
      );
      setUsuario(response.data); // Define os dados do usuário em caso de sucesso.
    } catch (error) {
      // Lida com erros na requisição.
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    }
  };

  // Função para lidar com o logout.
  const handleLogout = () => {
    setNome('');
    setSenha('');
    setUsuario(null);
    setError('');
  };

  return (
    <div className='login-container'>
      <div className='login-image'>
        <div className='img_Logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='nome-empresa'>
          <span className='bold'>can</span>
          <span className='light'>game</span>
        </div>
        <div className='palavra-edu'>
          <span className='edu-letra'>e</span>
          <span className='edu-letra'>d</span>
          <span className='edu-letra'>u</span>
        </div>
        <div className='carrossel_Container'>
          <CarrosselPremios />
        </div>
      </div>
      {usuario == null ? (
      // Se não houver usuário logado, mostra o formulário de login.
      <div className='login-Formulario'> {/*div para envolver o formulário de login*/}
        <h2 className='h2_bem-vindo'>Bem-vindo ao CanGame edu</h2>
        <form className='input_Container'> {/*Formulário de login com 2 inputs, 1 <p> e um botão*/}
            <InputLogin 
              type="text"
              name="nome"
              label="Digite seu nome"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              onFocus={() => setError('')}
            />
            <InputLogin 
              type="password"
              name="senha"
              label="Digite sua senha"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              onFocus={() => setError('')}
            />
            <p className='mensagem_Erro'>{error}</p> 
            {/* Botão de login */}
            <button type='submit' className='btn-login'
                    disabled={!nome.trim() || !senha.trim()}
                    onClick={(evento) => handleLogin(evento)}>LOGIN</button>
        </form>
      </div>
      ) : (
        // Se logou com sucesso, mostra mensagem de boas-vindas e o botão de logout.
        <div id='div_Logado'>
          <h2>Olá {usuario.nome}, você logou como {usuario.nivel}</h2>
          <button type='button' className='btn_Logado'
                  onClick={() => handleLogout()}>SAIR</button>
        </div>
      )}
    </div>
  )};
export default Login; // Exporta o componente Login.