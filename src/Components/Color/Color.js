import { useParams, NavLink } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { id, key, pass } = useParams();
  return (
    <section className="colorWall">
      <div className="colorContainer" style={ { backgroundColor: `#${id}${key}${pass}` } }>
        <p className="hex-text" >{ id }{ key }{ pass }</p>
        <NavLink to='/' className="backHome">back to colors</NavLink>
      </div>
    </section>
  );
}