import React, { useEffect, useState, Fragment } from 'react';
import Formulario from "./componentes/Fomulario";

import axios from 'axios';
import Cancion from './componentes/Cancion';
import Artista from './componentes/Artista';

const App = () => {

  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  const [info, setInfo] = useState({});

  //metodo para consultar api letra
  const consultarApiLetra = async (busqueda) => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios(url);
    console.log(resultado);

    setArtista(artista);

    setLetra(resultado.data.lyrics);
  }

  useEffect(()=>{
    consultarApiInfo();
  },[artista])

  const consultarApiInfo = async () => {
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await axios(url);
    //console.log(resultado);

    setInfo(resultado.data.artists[0]);
    }
    
  }


  return (
    <Fragment>
      <Formulario
        consultarApiLetra={consultarApiLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista
            info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;