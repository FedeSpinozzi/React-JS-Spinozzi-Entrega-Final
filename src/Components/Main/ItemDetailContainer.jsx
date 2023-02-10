import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../firebaseConfig';



const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [cargando,setCargando] = useState(true)

    const {id} = useParams();
   

    useEffect(() => {
        const getProduct = () => {
            
            
            const referenciaDoc = doc(productsCollection,id)
            const pedido = getDoc(referenciaDoc)

            pedido
                .then((resultado) => {
                    const producto = resultado.data()
                    setItem(producto)
                    setCargando(false)
                })
                .catch((error) => {
                    
                })
        };

        getProduct()

    }, [id]);

    return <>{!cargando ? <ItemDetail item={item} /> : <p>Cargando...</p>}</>;
};

export default ItemDetailContainer;