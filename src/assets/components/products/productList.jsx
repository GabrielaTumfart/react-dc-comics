import ProductCard from "./ProductCard";


export default function ProductList(props) {

    const cards = props.comics.map(function(comic, index) {
        return <ProductCard key={index} comic={comic} />;




    });

    return (
        
        
    
    );
}