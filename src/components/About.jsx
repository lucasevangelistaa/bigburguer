import Logo from "../assets/logo-bigburguer.png";

function About() {
  return (
    <section className="bg-[#FFF3E0] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Logo}
            alt="Logo BigBurguer"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full max-w-md h-auto transition duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Texto sobre nós */}
        <div className="w-full md:w-1/2 text-[#212121]">
          <h1 className="text-4xl md:text-5xl mb-6">
            Sobre <span className="personalizado">Nós</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            A <span className="font-bold">BigBurguer</span> nasceu da paixão por
            hambúrgueres artesanais de verdade. Desde o primeiro pão tostado até
            o último picles, tudo é feito com carinho e ingredientes frescos.
          </p>
          <p className="text-base leading-relaxed">
            Nosso objetivo? Servir lanches que fazem os olhos brilharem e o
            estômago agradecer. Aqui, cada mordida é uma experiência — seja no
            salão, no delivery ou direto da grelha pro seu coração. 🍔❤️
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
