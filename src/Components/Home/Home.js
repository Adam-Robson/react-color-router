import './Home.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <span>
        <NavLink to="/colors">Hello Palette!</NavLink>
      </span>
    </div>
  );
}
