import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productsCollection } from '../../firebaseConfig';
import { getDocs , query , where } from "firebase/firestore"





const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { tipoElegido: categoryName = null, generoElegido = null } = useParams();
    

    useEffect(() => {

        const getProductsFiltered = () => {
        
                let filtro 

                if(categoryName ){
                 filtro = query(productsCollection,where("tipo","==",categoryName))
                }else if(generoElegido){
                    filtro = query(productsCollection,where("genero","==",generoElegido))
                }else{
                    filtro = productsCollection
                }

                const pedidoPorCategoria = getDocs(filtro)
    
                pedidoPorCategoria
                    .then((resultado) => {
                        const productos = resultado.docs.map((doc) => {
                            return { id : doc.id , ...doc.data() }
                        })
                        
                        setItems(productos)
                    })
                    .catch((error) => {
                        
                        
                    })
        }

        getProductsFiltered()

    }, [categoryName, generoElegido]);

    
    return (
        <div>
            <h2>{}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
