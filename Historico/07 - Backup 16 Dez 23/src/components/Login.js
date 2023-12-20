import axios from "axios"; //importa a biblioteca Axios para realizar solicitações HTTP ao servidor.
import { useState } from "react"; //importa a função useState do React. Ela é um hook que permite adicionar estado a componentes de função.
import Logo from './Identidade_Visual/logotipo-branco.png'; //importa a logo do CanGame.

function Login() { //cria o componente Login. Ele é uma função que retorna um elemento JSX.
  const [nome, setNome] = useState(''); //cria o estado "nome" e a função "setNome" para atualizá-lo, e o inicializa com uma string vazia.
  const [senha, setSenha] = useState(''); //cria o estado "senha" e a função "setSenha" para atualizá-lo, e o inicializa com uma string vazia.
  const [error, setError] = useState(''); //cria o estado "error" e a função "setError" para atualizá-lo, e o inicializa com uma string vazia.
  const [usuario, setUsuario] = useState(null); //cria o estado "usuario" e a função "setUsuario" para atualizá-lo, e o inicializa com "null".

  const handleLogin = async(evento) => { //cria uma função assíncrona que recebe um evento (click) como parâmetro.
    evento.preventDefault(); //impede a ação padrão do evento clique (envio dos dados do formulário e recarregamento da página).

    try { //tenta executar o código abaixo. Se ocorrer um erro, o bloco catch será executado.
      const response = await axios.post( //envia uma solicitação de login para o servidor utilizando Axios.
        'http://localhost:3000/login', //URL do servidor que receberá a solicitação.
        JSON.stringify({ nome, senha }), //dados que serão enviados para o servidor. Neste caso, o nome e a senha.
        { headers: { 'Content-Type': 'application/json' }}); //configura o cabeçalho padrão da solicitação JSON.
    
      setUsuario(response.data); //se a resposta da solicitação foi 200 (bem sucedida), atualiza o estado "usuario" com os dados do usuário.
    
    } catch (error) { //se ocorrer um erro durante a solicitação:
      if (!error?.response) { //se o servidor respondeu com nulo ou indefinido.
        setError('Erro ao acessar o servidor'); //define uma mensagem de erro que não foi possível acessar o servidor.
      } else if (error.response.status === 401) { //se o servidor respondeu um status 401 (Não autorizado)
        setError('Usuário ou senha inválidos'); //define uma mensagem de erro que o usuário ou senha são inválidos.
      }
    }
  };

  const handleLogout = () => { //cria uma função que não recebe parâmetros.
    setUsuario(null); //atualiza o estado "usuario" com nulo.
    setError(''); //atualiza o estado "error" com uma string vazia.
  };
  
  //retorna o elemento JSX abaixo.
  return ( 
    <div className = 'login-container'> {/*div para conter todos os elementos do formulário de login.*/}
        <div class="login-image">
          <img src={Logo} alt="Logo"></img>
          <div class="nome-empresa">
            <span class="bold">can</span><span class="light">game</span>
          </div>
          <div class="palavra-edu">
            <span class="edu-letra">e</span>
            <span class="edu-letra">d</span>
            <span class="edu-letra">u</span>
          </div>
          <div className="redes_Sociais">
            <a href="https://www.facebook.com/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#2aa4f4"></stop>
                  <stop offset="1" stop-color="#007ad9"></stop>
                </linearGradient>
                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
              </svg>                  
            </a>
            <a href="https://www.instagram.com/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z">
                </path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop offset=".999" stop-color="#4168c9" stop-opacity="0">
                </stop></radialGradient>
                <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#4b4b4b"/>
                  <stop offset=".247" stop-color="#3e3e3e"/>
                  <stop offset=".686" stop-color="#2b2b2b"/>
                  <stop offset="1" stop-color="#252525"/>
                </linearGradient>
                <path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28 C42,40.209,40.209,42,38,42z"/>
                <path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"/>
                <polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"/>
                <polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"/>
              </svg>
            </a>                
          </div>
        </div>
        {usuario == null ? ( //cria um operador ternário que verifica se o estado "usuario" é nulo.
          <div> {/*cria uma div para conter os elementos do formulário de login. (exigencia operador ternário*/}
            <div className="login-formulario">
              <h2 className="h2_bem-vindo">Seja bem-vindo ao CanGame edu</h2>
              <form> {/*cria um formulario para conter os dados que serão enviados ao servidor*/}
                <div class="grupo_Input">
                  <label for="nome" className="label_Inputs">Nome</label> 
                  <input type="text"
                        id="nome"
                        name="nome"
                        required
                        onChange={(evento) => setNome(evento.target.value)}
                        onFocus={() => setError('')}/>
                  <label for="senha" className="label_Inputs">Senha</label> {/*cria um label para o campo de entrada de texto da senha*/}
                  <input type="password" //cria um campo de entrada de texto do tipo "password" para a senha
                        id="senha" //define o id do campo como "senha"
                        name="senha" //define o nome do campo como "senha"
                        required //define que o campo é obrigatório
                        onChange={(evento) => setSenha(evento.target.value)} //a função "setSenha" será executada na alteração deste campo.
                        onFocus={() => setError('')}/>
                </div>"
                <p className="mensagem_erro">{error}</p> {/*cria um parágrafo para exibir a mensagem de erro*/}
                <button type="submit" //cria um botão do tipo "submit" para enviar os dados do formulário
                        className='btn-login' //define a classe do botão como "btn-login"
                        disabled={!nome.trim() || !senha.trim()} //desabilita o botão se o nome ou a senha estiverem vazios
                        onClick = {(evento) => handleLogin(evento)}>LOGIN</button> {/*a função "handleLogin" será executada no clique do botão*/}
              </form>
            </div>
          </div>
        ) : (
            <div id="div_Logado"> {/*cria uma div os elementos da mensagem de boas vindas. (exigencia do operador ternário)*/}
              <h2>Olá {usuario.nome}, você logou como {usuario.nivel} (vai pra tela de João)</h2> {/*dá boas-vindas e sugere que o usuário vá para a tela de João*/}
              <button type="button" //cria um botão do tipo "button" para sair da tela de login
                      className='btn_Logado' //define a classe do botão como "btn_Logado"
                      onClick={() => handleLogout()}>Sair</button> {/*a função "handleLogout" será executada no clique do botão*/}
            </div>
        )}
    </div>
  );
}

export default Login; //exporta o componente Login para ser importado e utilizado em outros arquivos do projeto.