// src/components/admin/AddData.tsx
import { db } from '../../firebase/firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';

const AddData = () => {
  const [data, setData] = useState('');

  const handleAddData = async () => {
    try {
      const docRef = await addDoc(collection(db, "tuColeccion"), {
        campo: data
      });
      console.log("Documento escrito con ID: ", docRef.id);
    } catch (e) {
      console.error("Error añadiendo documento: ", e);
    }
  };

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleAddData}>Agregar Datos</button>
    </div>
  );
};

export default AddData;
