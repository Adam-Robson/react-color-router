import { useParams } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { id, key, pass } = useParams();
  return (
    <section className="colorWall">
      <div>
        <p className="hex-text" style={ { backgroundColor: `#${id}${key}${pass}` } }>{ id }{ key }{ pass }</p>
      </div>
    </section>
  );
}
