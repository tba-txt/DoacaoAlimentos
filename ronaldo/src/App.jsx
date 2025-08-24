// src/App.jsx
import './App.css';
import imagemFundo from './assets/imagem-do-fundo.jpg'; // Substitua pelo nome real da sua imagem
import logo from './assets/imagem-do-fundo.jpg'; // Substitua pelo nome real da sua logo

function App() {
  return (
    <div className="app-container">
      {/* Navbar (Barra de Navegação) */}
      <header className="navbar">
        <div className="logo-project">PROJETO LOGO</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#volunteer">Seja um Voluntário</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#help">Como Ajudar</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Principal (Hero Section) */}
      <section className="hero-section" style={{ backgroundImage: `url(${imagemFundo})` }}>
        <div className="torn-paper top-torn"></div>
        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hero-text">
            <h1>É QUE SER INVISÍVEL DÓI</h1>
            <p>O Brasil tem cerca de 281.472 pessoas em situação de rua (IPEA, 2023). Mais que um número, são vidas invisíveis que precisam de nossa atenção.</p>
          </div>
        </div>
        <div className="torn-paper bottom-torn"></div>
        <button className="cta-button">Faça sua doação</button>
      </section>

      {/* Seção com as frases adicionais */}
      <section className="additional-info">
        <div className="info-box">
          <p>"Apenas 12% das pessoas que se encontram em situação de rua têm acesso regular a alimentação diária."</p>
        </div>
        <div className="info-box">
          <p>"Em São Paulo, a cada 10 pessoas em situação de rua, 9 dependem de doações para se alimentar."</p>
        </div>
      </section>
      
      {/* Seção de CTA para voluntários */}
      <section className="cta-volunteer">
        <h2>FAÇA A DIFERENÇA, JUNTE-SE A NÓS</h2>
      </section>

      {/* As outras seções (voluntários, como ajudar, etc) virão aqui */}
      <section id="volunteer">
        {/* Conteúdo da seção Seja um Voluntário */}
      </section>

      <section id="about">
        {/* Conteúdo da seção Sobre Nós */}
      </section>

      <section id="help">
        {/* Conteúdo da seção Como Ajudar */}
      </section>

    </div>
  );
}

export default App;