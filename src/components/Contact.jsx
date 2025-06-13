import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section
      className="bg-[#212121] text-white py-20 px-4 md:px-10 relative"
    >
      <Motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Lado esquerdo - Informações */}
        <Motion.div
          className="bg-[#4E342E] w-full md:w-1/3 p-8 space-y-8"
          variants={fadeLeft}
        >
          <h2 className="text-3xl font-bold text-mostarda">Contact</h2>

          <div className="space-y-6 text-sm text-[#f5f5f5]">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-mostarda text-lg mt-1 text-[#C62828]" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">Endereço:</h4>
                <p>R. New Star Wars, Miami – nº 222</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-mostarda text-lg mt-1 text-[#C62828]" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">Horários:</h4>
                <p>Seg a Sex: 17h às 23h</p>
                <p>Sáb e Dom: 18h às 00h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-mostarda text-lg mt-1 text-[#C62828]" />
              <div>
                <h4 className="text-lg font-semibold text-[#F4A300]">Telefone:</h4>
                <p>+55 (12) 1234-1234</p>
                <p>+55 (12) 1234-1234</p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Lado direito - Mapa */}
        <Motion.div className="w-full md:w-2/3 relative" variants={fadeRight}>
          <iframe
            title="Localização BigBurguer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.366125852241!2d-80.37862848497299!3d25.783879913190313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b94f6a14c7e9%3A0x8a207ec9cc2f2714!2sDoral%2C%20FL!5e0!3m2!1spt-BR!2sus!4v1717777777777"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px]"
          ></iframe>

          {/* Redes Sociais - lado direito */}
          <Motion.div
            className="absolute top-8 right-4 md:right-8 flex flex-col items-center gap-4 text-mostarda text-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {[FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn].map(
              (Icon, index) => (
                <Motion.a
                  key={index}
                  href="#"
                  variants={fadeUp}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#C62828] hover:text-[#F4A300] transition-transform duration-300"
                >
                  <Icon size={24} />
                </Motion.a>
              )
            )}
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Contact;
