import React from "react";
import { createContext, useState ,useContext} from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({children})=>{
    const [products,setProducts] = useState(null);
    const colorPalette=['#FF8B64','#55C2E6','#FF5E7D','#4BCF82','#F1C75B','#7335D2'];

    const contextValues ={
        products,
        setProducts,
        colorPalette
    }
       
    return (
        <ProductsContext.Provider value={contextValues}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductContext = ()=>useContext(ProductsContext);