import './Colors.css';
import { NavLink } from 'react-router-dom';

export default function Colors() {
  return (
    <section className="main">
      <div className="colorsContainer">
        <NavLink className="champagne" to="/color/f1/e0/c5" style={ { color: '#ffb563' } }>champage</NavLink>
        <NavLink className="mauve" to="/color/ed/c9/ff" style={ { color: '#edc9ff' } }>mauve</NavLink>
        <NavLink className="xanadu" to="/color/71/81/6d" style={ { color: '#71816d' } }>xanadu</NavLink>
        <NavLink className="midnight-green-eagle-green" to="/color/0b/3c/49" style={ { color: '#0b3c49' } }>midnight green<br /> eagle green</NavLink>
        <NavLink className="gunmetal" to="/color/33/37/45" style={ { color: '#333745' } }>gunmetal</NavLink>
        <NavLink to='/' className="backHome">back home</NavLink>

      </div>
    </section>
  );
}
