import logo from '/vectors/logo.svg'
import { NavLink } from "react-router-dom";
import HomeIcon from './icons/HomeIcon';
import MovieIcon from './icons/MovieIcon'
import TVIcon from './icons/TVIcon';
import BookmarkIcon from './icons/BookmarkIcon';

export default function Navbar() {

  return (
    <div className='navbar'>
      <p className="logo"><img src={logo} alt="logo" /></p>
      
      <nav>
        <ul>
          <li><NavLink activeclassname="active" to={'/'}> <HomeIcon /></NavLink></li>
          <li><NavLink activeclassname="active" to={'/movie'}><MovieIcon /></NavLink></li>
          <li><NavLink activeclassname="active" to={'/tv'}><TVIcon /></NavLink></li>
          <li><NavLink activeclassname="active" to={'/bookmark'}><BookmarkIcon /></NavLink></li>
        </ul>
      </nav>
    </div>
  )
}