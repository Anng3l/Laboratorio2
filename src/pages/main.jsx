import React, { useEffect, useState } from 'react'
import PokemonSearch from '../components/PokemonSearch';
import { Modal, Button } from 'react-bootstrap';

function main() {

  const [showPokemonSearch, setShowPokemonSearch] = useState(false);
  const [showPokemon1, setShowPokemon1] = useState("");
  const [showPokemon2, setShowPokemon2] = useState("");

  const handleOpenPokemonSearch = () => {
    setShowPokemonSearch(true);
  };
  const handleGoBackPokemonSearch = () => {
    setShowPokemonSearch(false);
  };

  return (
    <div>
      <main className="container text-center d-flex flex-column justify-content-center text-center">
        
        <div className="row" id="listarpokemon">

          <div className="row">
            <div className="col-12">
              <h1 className="font-weight-bold text-success">Batalla Pokémon</h1>
              <p className="lead">Selecciona los pokémon para la batalla</p>
            </div>
          </div>

          <article className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
            <div className="border border-gray border-1 rounded-3" id="pok-1">
              <img alt="Pokémon 1" src= {showPokemon1} />
              <h4 className="text-success">Habilidades</h4>
              <ol>
                {/*Habilidades Pk1*/}
              </ol>
              <a href="#" className="d-block bg-secondary text-white py-1 text-decoration-none">
                <p className="lead">Ver más detalles</p>
              </a>
            </div>
          </article>

          <article className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <button id='seleccionar' type="button" className="btn btn-success mb-3" onClick={ handleOpenPokemonSearch }>
                Seleccionar
              </button>
              <p className="lead">VS</p>
            </div>
          </article>

          <article className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="border border-gray border-1 rounded-3" id="pok-2">
              <img alt="Pokémon 2" src={showPokemon2}/>
              <h4 className="text-success">Habilidades</h4>
              <ol>
                {/*Habilidades Pk2*/}
              </ol>
              <a href="#" className="d-block bg-secondary text-white py-1 text-decoration-none">
                <p className="lead">Ver más detalles</p>
              </a>
            </div>
          </article>

        </div>

        <div className="row mt-5">
          <h1 className="font-weight-bold text-success">Usuarios Random</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody id="data">
              
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <h1 className="font-weight-bold text-success text-center">Poli Memes</h1>
          <div className="row" id="list-memes">
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center" id="meme">
              <div className="border rounded-3 shadow-sm" style={{ width: '300px', height: '300px' }}>
                <img className="w-100 h-100 object-fit-cover rounded" alt="Meme" />
              </div>
            </div>
          </div>
        </div>

        <footer className="py-2 mt-4">
          <p className="text-secondary">Todos los derechos reservados @ByronTosh 🐱‍👤</p>
        </footer>

      </main>

      {/* Modal */}
      <Modal show={showPokemonSearch} onHide={handleGoBackPokemonSearch} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Buscar Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PokemonSearch handleGoBack={handleGoBackPokemonSearch} setShowPokemon1={setShowPokemon1} setShowPokemon2={setShowPokemon2}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleGoBackPokemonSearch}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      
      <script src="./datosPokemon.js"></script>
      <script src="./datosUsers.js"></script>
      <script src="./datosMemes.js"></script>
    </div>
  );
}
export default main;