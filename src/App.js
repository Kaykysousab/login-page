import logo2 from "./assets/img/logo.png"
import "./style.css"

function App() {
  return (
    //container tudo na div mãe
    <div className="container">
     <div className="container-login">
        <div className="wrap-login">
          <form className="forms-login">
          <img className="imagem" src={logo2} alt="minha imagem da tela inicial de login" />
              <h1 className="login-forms-title">Bem Vindo</h1>
                <div className="input-warp">
                <label className="test">Your Email</label>
                 <input className="inputpass" type="email" placeholder="Digite seu Email"/>
                 <span className="focus" data-placeholder="email"></span>
            </div>
            <div className="input-warp">
                <label>Password</label>
                 <input className="inputpass" type="password" placeholder="Digite sua Senha"/>
                 <span className="focus" data-placeholder="password"></span>
            </div>
            <div>
              <span className="textlogin">Esqueceu sua senha?<a href="#"> Click aqui</a></span>
            </div>
          <div className="container-login-froms-btn">

            <button className="btn-login">Login</button>
          </div>
          </form>
        </div>
     </div>
    </div>
  );
}

export default App;
