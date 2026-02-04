export default function Footer() {
    return (

        <footer>

            {/* PARTE SUPERIORE */}

            <div className="footer-top">

                <div className="container">

                    {/* COLUMNS */}

                        
                    <div className="footer-columns"> 
                        {/* COLUMN 1 */}
                            <div>
                                <h3>DC COMICS</h3>
                                <ul>
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>

                            <h3>SHOP</h3>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                            </div>

                            {/* COLUMN 2 */}
                            <div>
                                <h3>DC</h3>
                                <ul>
                                    <li>Terms Of Use</li>
                                    <li>Privacy Policy (New)</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Subscriptions</li>
                                    <li>Talent Workshops</li>
                                    <li>CPSC Certificates</li>
                                    <li>Ratings</li>
                                    <li>Shop Help</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>

                            {/* COLUMN 3 */}
                            <div>
                                <h3>SITES</h3>
                                <ul>
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>

                    </div>

                    {/* BIG LOGO BACKGROUND */}
                        <div className="logo-bg">
                            <img src="/src/assets/img/dc-logo-bg.png" alt="DC Logo" />
                        </div>


                </div>


            </div>

            {/* BOTTOM sign-up */}
            <div className="footer-bottom">
                <div className="container">

                <button>SIGN-UP NOW!</button>

                <div className="social">
                    <span>FOLLOW US</span>
                    <img src="/src/assets/img/footer-facebook.png" alt="Facebook" />
                    <img src="/src/assets/img/footer-twitter.png" alt="Twitter" />
                    <img src="/src/assets/img/footer-youtube.png" alt="YouTube" />
                    <img src="/src/assets/img/footer-pinterest.png" alt="Pinterest" />
                    <img src="/src/assets/img/footer-periscope.png" alt="Periscope" />
                </div>

                

                </div>
            </div>

            







        </footer>
    ) 
}