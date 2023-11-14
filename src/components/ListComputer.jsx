// ListComputer.js
import React, { useEffect, useState, useContext } from 'react';
import Computer from './Computer';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { ComputerContext } from '../Data/ComputerContext';

function ListComputer() {
  const computerContext = useContext(ComputerContext);
  const [listComputers, setListComputers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const computersCollection = collection(firestore, 'computers');
      const querySnapshot = await getDocs(computersCollection);
      const computerList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListComputers(computerList);
    };

    fetchData();
  }, []);

  return (
    <div className="row row-cols-3">
      {listComputers.length > 0 ? (
        listComputers.map((element) => (
          <Computer
            value={element}
            key={element.id}
            fnAddFavoritesComputer={computerContext.addComputerFavorites}
            searchComputer={computerContext.searchComputer}
            deleteComputer={computerContext.deleteComputer}
          />
        ))
      ) : (
        <p style={{ height: '80%', textAlign: 'center', lineHeight: '100px' }}>
          La lista de computadoras está vacía.
        </p>
      )}
    </div>
  );
}

export default ListComputer;
