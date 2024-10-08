import React, { useEffect } from "react";

function PokemonSearch( { handleGoBack, setShowPokemon1, setShowPokemon2 } ) {
    useEffect(() => {
      let pokemonsId = [];
      const fetchData = async ()=> {
        let container = document.getElementById("pokemonsContainer");
        
        let pokemonImagen = document.getElementById("pokeImage");
        let pokemonNombre = document.getElementById("nombre");
        let pokemonTipos = document.getElementById("tipos");
        let pokemonSeleccionar = document.getElementById("pokemonSeleccionar");

        const datos = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const respuesta = await datos.json();

        //console.log(respuesta.results.slice(0, 5));

        const pokemons = await Promise.all(
          respuesta.results.slice(0, 20).map(async pokemon => {
            let pokemonParticular = await fetch(pokemon.url);
            let pokemonParticularJson = await pokemonParticular.json();
            //pokemonParticularJson.push(pokemonParticularJsonDos);
            return pokemonParticularJson;
          })
        );

        pokemons.forEach(jsonObtenidos => 
        {
          //Imágenes
          const newPokemonImagen = pokemonImagen.cloneNode(true);
          const image = newPokemonImagen.querySelector("img");
          image.src = jsonObtenidos.sprites.front_default;
        
          //Nombre
          const newPokemonNombre = pokemonNombre.cloneNode(true);
          newPokemonNombre.textContent = jsonObtenidos.name;

          //Tipos
          const newPokemonTipos = pokemonTipos.cloneNode(true);
          const tipos = jsonObtenidos.types.map(element => element.type.name.toUpperCase()).join(", ");
          newPokemonTipos.textContent = tipos;

          //Botones
          const newPokemonSeleccionar = pokemonSeleccionar.cloneNode(true);
          newPokemonSeleccionar.className = "btn btn-primary col-3 rounded shadow";
          newPokemonSeleccionar.textContent = "Seleccionar";
          newPokemonSeleccionar.style.margin = "auto";
          newPokemonSeleccionar.style.width = "auto";
          newPokemonSeleccionar.style.height = "50%"; 
          newPokemonSeleccionar.style.fontSize = "14px";
          pokemonsId.push({id: jsonObtenidos.id, img: jsonObtenidos.sprites.front_default});
          newPokemonSeleccionar.onclick = () => {
            if (setShowPokemon1 === "") {
                setShowPokemon1(jsonObtenidos.sprites.front_default);
            } else if (setShowPokemon2 === "") {
                setShowPokemon2(jsonObtenidos.sprites.front_default);
            }
            handleGoBack();
          };


          container.appendChild(newPokemonImagen);
          container.appendChild(newPokemonNombre);
          container.appendChild(newPokemonTipos);
          container.appendChild(newPokemonSeleccionar);
        });

        pokemonImagen.remove();
        pokemonNombre.remove();
        pokemonTipos.remove();
        pokemonSeleccionar.remove();
      }

      fetchData();
    }, [setShowPokemon1, setShowPokemon2]);

  


  return (
    <div id="searchPokes" className="container mt-5">
      <div className="">
        
        <h2 id="searchTitulo" className="text-center text-success">Lista Pokémon</h2>

        <div id="searchSearch" className="d-flex justify-content-center align-items-center mb-3">
          <h5 id="searchTag" className="me-2">Nombre</h5>
          <input type="text" id="searchInput" className="form-control w-50" placeholder="Ingrese el nombre del Pokémon" />
          <button id="searchButton" className="btn btn-primary ms-2">Buscar</button>
        </div>

        <section
          id="pokemonsContainer"
          className="row text-center"
          style={{ maxHeight: '400px', overflowY: 'auto' }}
        >
          <div id="cabeceraImagen" className="col-3 font-weight-bold">Imagen</div>
          <div id="cabeceraNombre" className="col-3 font-weight-bold">Nombre</div>
          <div id="cabeceraTipos" className="col-3 font-weight-bold">Tipos</div>
          <div id="cabeceraTipos" className="col-3 font-weight-bold">Seleccionar</div>

          <div id="pokeImage" className="col-3">
            <img id="image" src="" alt="Pokémon" className="img-fluid" style={{ maxHeight: "100px" }} />
          </div>
          <div id="nombre" className="col-3"></div>
          <div id="tipos" className="col-3"></div>
          <button id="pokemonSeleccionar" className="col-3"></button>
        </section>
      </div>
    </div>
  );
}

export default PokemonSearch;
