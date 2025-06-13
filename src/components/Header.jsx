import { PiHamburgerBold } from "react-icons/pi";

function Header() {
  return (
    <>
      <header className="bg-[#4E342E] text-[#F4A300] p-4">
          <div className="flex justify-center items-center gap-2">
            <PiHamburgerBold className="text-6xl" />
            <h1 className="text-6xl font-bold">Big<span className="personalizado">Burguer</span></h1>
          </div>
      </header>
    </>
  );
}

export default Header;
