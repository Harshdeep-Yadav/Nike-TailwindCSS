import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Slide } from "react-reveal";
const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">

<Slide left>
          {navLinks.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                className="text-lg font-monts errat leadin-normal text-slate-gray"
              >
                {it.label}
              </a>
            </li>
          ))}
          </Slide>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="humburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
