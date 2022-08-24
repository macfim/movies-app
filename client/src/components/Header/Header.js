import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {

  return (
    <header>
      <div style={{ background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)' }}
        className="h-2" >
      </div>
      <div className="flex h-14 px-12 justify-around items-center bg-white shadow-md w-full">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
