import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <div className="homeContainer">
        <Link to='/colors' className="title">Hello Palette!</Link>
      </div>
    </section>
  );
}
