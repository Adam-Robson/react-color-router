import './Colors.css';
import { Link } from 'react-router-dom';
import './Colors.css';
import colorlist from '../../data';
export default function Colors() {
  return (
    <header className="headerContainer">
      {colorlist.map(color => (<Link key={color.key} to={`/colors/${color.id}`}>{color.title}</Link>))}
      {/* <h3>
        <span><a href="/colors/rgb">Dark Liver</a></span>
      </h3>
      <h3>
        <span><a href="/colors/rgb">Metallic Seaweed</a></span>
      </h3>
      <h3>
        <span><a href="/colors/rgb">Beau Blue</a></span>
      </h3>
      <h3>
        <span><a href="/colors/rgb">Rajah</a></span>
      </h3>
      <h3>
        <span><a href="/colors/rgb">Deep Champagne</a></span>
      </h3> */}
      <Link to="/">back home</Link>
    </header>
  );
}
