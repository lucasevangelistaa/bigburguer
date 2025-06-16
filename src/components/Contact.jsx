import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#212121] text-white py-20 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl">
        {/* Lado esquerdo - Informações */}
        <div className="bg-[#4E342E] w-full md:w-1/3 p-8 space-y-8">
          <h2 className="text-3xl font-bold text-mostarda">Contact</h2>

          <div className="space-y-6 text-sm text-[#f5f5f5]">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#C62828] text-lg mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">
                  Endereço:
                </h4>
                <p>R. New Star Wars, Miami – nº 222</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-[#C62828] text-lg mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">
                  Horários:
                </h4>
                <p>Seg a Sex: 17h às 23h</p>
                <p>Sáb e Dom: 18h às 00h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#C62828] text-lg mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">
                  Telefone:
                </h4>
                <p>+55 (12) 1234-1234</p>
                <p>+55 (12) 1234-1234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito - Mapa */}
        <div className="w-full md:w-2/3 relative">
          <iframe
            title="Localização BigBurguer"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.0!2d-44.282905!3d-2.53911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzEnMjAuMCJTIDQ0wrAxNic1My4lIw!5e0!3m2!1spt-BR!2sbr!4v1650000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px]"
          ></iframe>

          {/* Redes Sociais - lado direito */}
          <div className="absolute top-8 right-4 md:right-8 flex flex-col items-center gap-4 text-mostarda text-xl">
            {[FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#C62828] hover:text-[#F4A300] transition-transform duration-300 transform hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
