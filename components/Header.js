import Social from '../components/Socials'
const Header = () => {
  return( 
  <header className="absolute z-30 w-full flex item-center px-16 xl:px-0 xl:h-[90px] ">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flew-row justify-between items-center gap-y-6 py-8">
        <h2 className="font-bold text-4xl">Syed Babar Ali</h2>
        
        <Social />
      </div>
    </div>
    
    </header>
)
};

export default Header;
