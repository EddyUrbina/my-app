// ListFavoritos.js
import React from 'react';
import Favorito from './Favorito';
import useContextComputer from '../hooks/useContextComputer';

function ListFavoritos() {
  const computerContext = useContextComputer();
  const listaFavoritosRender = computerContext.listComputersFavoritas.map((element) => (
    <Favorito key={element.id} value={element} deleComputerFavorites={computerContext.deleComputerFavorites} />
  ));

  return (
    <div>
      <i className="fa fa-chevron-circle-down" aria-hidden="true">
        Lista favoritos
      </i>
      <hr />
      {listaFavoritosRender.length > 0 ? (
        <h4>{listaFavoritosRender}</h4>
      ) : (
        <p style={{ height: '80%', textAlign: 'center', lineHeight: '100px' }}>
          La lista de favoritos está vacía.
        </p>
      )}
    </div>
  );
}

export default ListFavoritos;



