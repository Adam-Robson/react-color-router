import { useParams } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { id, key, pass } = useParams();
  return (

    <div>
      <h1>hex #`${ id }${ key }${ pass }`</h1>
    </div>
  );
}
