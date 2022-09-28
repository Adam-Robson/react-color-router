import './Colors.css';
import { NavLink } from 'react-router-dom';

export default function Colors() {
  return (
    <div className="colorsContainer">
      <NavLink className="rajah" to="/color/ff/b5/63">Rajah</NavLink>
      <NavLink className="metallic-seaweed" to="/color/08/7e/8b">Metallic Seaweed</NavLink>
      <NavLink className="beau-blue" to="/color/cf/de/e7">Beau Blue</NavLink>
      <NavLink to='/' className="backHome">back home</NavLink>
    </div>
  );
}
