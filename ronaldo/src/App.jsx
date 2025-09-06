import React from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#DB4E00] text-white p-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      <div className="font-black text-lg md:text-xl">
        Sopa Voluntária
      </div>
      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-6">
          <li><a href="#volunteer" className="hover:text-gray-300 transition-colors duration-300 font-bold">Seja um Voluntário</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition-colors duration-300 font-bold">Sobre Nós</a></li>
          <li><a href="#volunteer" className="hover:text-gray-300 transition-colors duration-300 font-bold">Como Ajudar</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full right-0 mt-1 w-48 bg-custom-blue rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col p-2">
            <li><a href="#volunteer" className="block px-4 py-2 text-white font-bold hover:bg-blue-800 rounded">Seja um Voluntário</a></li>
            <li><a href="#about" className="block px-4 py-2 text-white font-bold hover:bg-blue-800 rounded">Sobre Nós</a></li>
            <li><a href="#volunteer" className="block px-4 py-2 text-white font-bold hover:bg-blue-800 rounded">Como Ajudar</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function TornPaper({ position }) {
  const style = { backgroundImage: `url('/rasgo.png')`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' };
  if (position === 'bottom') { style.transform = 'scaleY(-1)'; }
  return <div className={`absolute left-0 w-full h-20 md:h-32 z-30 ${position === 'top' ? 'top-12' : 'bottom-0'}`} style={style}></div>;
}

function HeroSection() {
  return (
    <main className="relative text-white text-center flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(/imagem-do-fundo.jpg)` }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <TornPaper position="top" />
      <TornPaper position="bottom" />
      <div className="relative z-20 flex flex-col items-center gap-8 pt-16 px-4">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider">
            É que ser invisível <span className="text-custom-orange">dói</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto">
            O Brasil tem cerca de <span className="font-bold text-custom-orange">281.472</span> pessoas em situação de rua (IPEA, 2023). Mais que um número, são vidas invisíveis que precisam de nossa atenção.
          </p>
        </div>
        <a href="#volunteer" className="bg-white text-custom-orange font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 shadow-lg">Faça sua doação</a>
      </div>
    </main>
  );
}
function StatsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="text-center md:text-right md:w-1/2"><p className="text-base md:text-lg text-gray-700 italic">"Apenas 12% das pessoas que se encontram em situação de rua têm acesso regular a alimentação diária."</p></div>
          <div className="hidden md:block h-24 w-px bg-custom-orange"></div>
          <div className="md:hidden w-24 h-px bg-custom-orange my-6"></div>
          <div className="text-center md:text-left md:w-1/2"><p className="text-base md:text-lg text-gray-700 italic">"Em São Paulo, a cada 10 pessoas em situação de rua, 9 dependem de doações para se alimentar."</p></div>
        </div>
        <div className="text-center mt-12"><h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase tracking-wider">Faça a diferença, junte-se a nós</h2></div>
      </div>
    </section>
  );
}
function ThankYouModal({ show, onClose, groupLink }) {
  if (!show) return null;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(groupLink)}`;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Obrigado por se juntar a nós!</h2>
        <p className="text-gray-600 mb-6">Sua ajuda é o primeiro passo para mudar uma vida. Entre no nosso grupo de voluntários para começar.</p>
        <a href={groupLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">Entrar no Grupo do WhatsApp</a>
        <div className="my-4"><p className="text-sm text-gray-500">Ou aponte a câmera para o QR Code</p><img src={qrCodeUrl} alt="QR Code para o grupo do WhatsApp" className="mx-auto mt-2 rounded-md"/></div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 font-medium mt-4">Fechar</button>
      </div>
    </div>
  );
}
function VolunteerForm() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const whatsappGroupLink = "https://chat.whatsapp.com/DQHeF2xdR1D6I3MlW4V9Ff?mode=ems_share_t";
  const handleSubmit = (event) => { event.preventDefault(); setIsModalVisible(true); };
  const handleCloseModal = () => { setIsModalVisible(false); };
  return (
    <>
      <section id="volunteer" className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Quero ser um voluntário</h3>
            <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label><input required type="text" id="name" name="name" className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-orange focus:border-custom-orange" placeholder="Seu nome"/></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label><input required type="email" id="email" name="email" className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-orange focus:border-custom-orange" placeholder="seuemail@exemplo.com"/></div>
            <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp)</label><input required type="tel" id="phone" name="phone" className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-orange focus:border-custom-orange" placeholder="(XX) XXXXX-XXXX"/></div>
            <div><button type="submit" className="w-full bg-custom-orange text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105 shadow-lg">Enviar Cadastro</button></div>
          </form>
        </div>
      </section>
      <ThankYouModal show={isModalVisible} onClose={handleCloseModal} groupLink={whatsappGroupLink} />
    </>
  );
}

function ImpactImageSection() {
    return (
        <section className="bg-[#DB4E00] py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <img 
                    src="/imagem-grid.png" 
                    alt="Pessoa em situação de rua dormindo em um banco, com uma grade laranja estilizada sobre a imagem." 
                    className="rounded-lg shadow-2xl w-full h-auto" 
                />
            </div>
        </section>
    );
}
function AboutSection() {
    return (
        <section id="about" className="bg-gray-100 py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase">Nossa História</h2>
                <div className="mt-4 mb-8 w-24 h-1.5 bg-custom-orange mx-auto"></div>
                <div className="text-left text-lg text-gray-700 space-y-4">
                    <p>O projeto "<span className="font-bold text-custom-orange">Sopa Voluntária</span>" nasceu da inquietação e do desejo de fazer a diferença de <span className="font-bold">Ronaldo</span>. Ronaldo sentiu o chamado para olhar além dos muros da universidade e encarar de frente uma realidade dura e muitas vezes ignorada.</p>
                    <p>Movido pela crença de que a empatia é a mais poderosa ferramenta de transformação social, ele resolveu implementar este projeto. O objetivo é simples, mas audacioso: conectar pessoas que querem ajudar com quem mais precisa, criando uma ponte de solidariedade para combater a fome e a invisibilidade da população em situação de rua.</p>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#DB4E00] text-white py-10 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-black uppercase">Sopa Voluntária</h3>
                <p className="mt-2 text-gray-200">Transformando empatia em ação.</p>

                <div className="border-t border-gray-700 pt-6 mt-8">
                    <p className="text-gray-300 text-sm">
                        &copy; {currentYear} Sopa Voluntária. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatsSection />
      <VolunteerForm />
      <ImpactImageSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;

