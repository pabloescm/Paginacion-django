import axios from 'axios';
import { useState, useEffect } from 'react';
import { Practico } from '../models/practico';
import "../css/home.css"


const Home = () => {
  const [practicos, setPracticos] = useState<Practico[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPracticos('http://localhost:8000/api/practico/');
  }, []);

  const fetchPracticos = (url: string) => {
    axios.get(url)
      .then((response) => {
        setPracticos(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      })
      .catch(() => {
        setError('Error fetching prácticos');
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Prácticos</h1>
      <h3>Nombre - fecha de entrega - puntos</h3>
      <ul>
        {practicos.map((practico) => (
          <li key={practico.id}>
            {practico.nombre} - {practico.fecha_de_entrega} - {practico.puntos}
          </li>
        ))}
      </ul>

      <div className="button-container">
        <button 
          onClick={() => prevPage && fetchPracticos(prevPage)}
          disabled={!prevPage} 
        >
          Anterior
        </button>
        
        <button 
          onClick={() => nextPage && fetchPracticos(nextPage)}
          disabled={!nextPage} 
        >
          Siguiente
        </button>
      </div>
    </div>
    
  );
};

export default Home;
