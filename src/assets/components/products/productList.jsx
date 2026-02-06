import ProductCard from "./ProductCard";


export default function ProductList(props) {

    const cards = props.comics.map(function(comic, index) {
        return <ProductCard key={index} comic={comic} />;




    });

    return (
        

<section className="current-series">

<div className="container">

    <h2>CURRENT SERIES</h2>

    <div className="cards-grid">

    </div>

</div>

<button className="Load-more">LOAD MORE</button>

</section>
        
    
    );
}