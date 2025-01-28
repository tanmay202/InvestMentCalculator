import logo from '../assets/investCalc.png'
const Header = () => {
  return (
    <header className="flex justify-center items-center h-20 bg-gray-800 text-white"> 
    <img src={logo} alt="Site Logo" className=" h-full" /> 
  </header>
  )
}

export default Header