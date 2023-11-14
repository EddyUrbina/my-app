import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, query, getDocs, doc, deleteDoc, where } from "firebase/firestore";
import dataComputer from "./Computer";
import { firestore } from "../firebase";
import { toast } from "react-toastify";

const ComputerContext = createContext();

function ComputerContextProvider({ children }) {
  const [listComputersFavoritas, setlistComputersFavoritas] = useState([]);
  const [listComputers, setListComputers] = useState(dataComputer);

  useEffect(() => {
    const fetchData = async () => {
      const computersCollection = collection(firestore, "computers");
      const q = query(computersCollection);

      try {
        const querySnapshot = await getDocs(q);

        const computerList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setListComputers(computerList);
      } catch (error) {
        console.error("Error al obtener la lista de computadoras:", error);
        // Mostrar notificación de error
        toast.error("Error al obtener la lista de computadoras");
      }
    };

    fetchData();
  }, []);

  async function addComputerFavorites(element) {
    try {
      // Verificar si el favorito ya existe en la lista
      const favoritoExistente = listComputersFavoritas.some((item) => item.id === element.id);
  
      if (favoritoExistente) {
        // Mostrar notificación de advertencia
        toast.warning("Esta computadora ya está en tus favoritos");
      } else {
        // Agregar a la lista local
        setlistComputersFavoritas((prevList) => [...prevList, element]);
  
        // Guardar en Firestore
        const computersCollection = collection(firestore, "favoritos");
        const docRef = await addDoc(computersCollection, element);
        console.log("Favorito agregado con ID: ", docRef.id);
  
        // Mostrar notificación de éxito
        toast.success("Favorito agregado correctamente");
      }
    } catch (error) {
      console.error("Error al agregar el favorito:", error);
      // Mostrar notificación de error
      toast.error("Error al agregar el favorito");
    }
  }

  async function deleComputerFavorites(element) {
    try {
      // Eliminar de Firestore
      await deleteDoc(doc(firestore, "computers", element.id));
      console.log("Computadora favorita eliminada con ID: ", element.id);

      // Actualizar el estado local
      setlistComputersFavoritas((prevList) => prevList.filter((computer) => computer.id !== element.id));

      // Mostrar notificación de éxito
      toast.success("Favorito eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar la computadora favorita:", error);
      // Mostrar notificación de error
      toast.error("Error al eliminar el favorito");
    }
  }

  async function deleteComputer(computerId) {
    try {
      // Eliminar de Firestore
      const computerRef = doc(firestore, 'computers', computerId);
      await deleteDoc(computerRef);
      console.log('Computadora eliminada con ID: ', computerId);
  
      // Actualizar el estado local eliminando el elemento
      setListComputers((prevList) => prevList.filter((computer) => computer.id !== computerId));
  
      // Mostrar notificación de éxito
      toast.success('Computadora eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar la computadora:', error);
      // Mostrar notificación de error
      toast.error('Error al eliminar la computadora');
    }
  }

  const searchComputer = async (element) => {
    const computersCollection = collection(firestore, "computers");
    let q;

    if (element.Marca && element.Marca.length > 0) {
      q = query(computersCollection, where("Marca", "==", element.Marca));
    } else {
      q = query(computersCollection);
    }

    try {
      const querySnapshot = await getDocs(q);

      const computerList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setListComputers(computerList);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
      // Mostrar notificación de error
      toast.error("Error al realizar la búsqueda");
    }
  };

  const contextValue = {
    listComputers,
    listComputersFavoritas,
    addComputerFavorites,
    deleComputerFavorites,
    searchComputer,
    deleteComputer,
  };

  return (
    <ComputerContext.Provider value={contextValue}>
      {children}
    </ComputerContext.Provider>
  );
}

export { ComputerContext, ComputerContextProvider };
