import comics from "/src/comics";

export default function Main() {
    return (
    
    <main>
        
        {/* content placeholder */}

        <section className="current-series">

            <div className="container">

                <h2>CURRENT SERIES</h2>
            
            </div>
                
        </section>
        

        {/* faccia azzura */}

        <section className="blue-bar">
            <div className="container">
                <ul>
                    <li>
                    <img src="/src/assets/img/buy-comics-digital-comics.png" alt="" />
                        <span>DIGITAL COMICS</span>

                    </li>

                    <li>
                    <img src="/src/assets/img/buy-comics-merchandise.png" alt=""/>
                        <span>DC MERCHANDISE</span>

                    </li>

                    <li>
                    <img src="/src/assets/img/buy-comics-subscriptions.png" alt="" />
                        <span>SUBSCRIPTION</span>

                    </li>

                    <li>
                    <img src="/src/assets/img/buy-comics-shop-locator.png" alt="" />
                        <span>COMIC SHOP LOCATOR</span>

                    </li>

                    <li>
                       
                    <img src="/src/assets/img/buy-dc-power-visa.svg" alt="" />
                        <span>DC POWER VISA</span>

                    </li>


                </ul>





            </div>






        </section>






    </main>

    )
}