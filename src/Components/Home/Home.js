import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <span className="titleContainer">
        <Link to="/colors" className="title">Hello Palette!</Link>
      </span>
    </div>
  );
}