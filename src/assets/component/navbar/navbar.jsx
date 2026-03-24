import logo from "./TastyBites food logo design-Photoroom.png"
import './navbar.css'

const Navbar = () => {
    return (
        <header className="header">
          <nav className='navbar'>
      <div className='flex-1'>
        <img src={logo} alt="TastyBites food" />
      </div>
      <div>
        <ul className='flex-2'>
          <li>Home</li>
          <li>About Us</li>
          <li>Foods</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button className='btn'>Order Now</button>
      </div>
    </nav>
        </header>
    )
}
export default Navbar