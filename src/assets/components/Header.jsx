export default function Header() {

    const headerLinks = [
        { 
            url: "#", 
            text: "CHARACTERS", 
            isActive: false },

            { 
                url: "#", 
                text: "COMICS", 
                isActive: false },

                { 
                    url: "#", 
                    text: "MOVIES", 
                    isActive: false },

                    { 
                        url: "#", 
                        text: "TV", 
                        isActive: false },

                        { 
                            url: "#", 
                            text: "GAMES", 
                            isActive: false },

                            { 
                                url: "#", 
                                text: "COLLECTIBLES", 
                                isActive: false },

                                { 
                                    url: "#", 
                                    text: "VIDEOS", 
                                    isActive: false },

                                    { 
                                        url: "#", 
                                        text: "CFANS", 
                                        isActive: false },

                                        { 
                                            url: "#", 
                                            text: "NEWS", 
                                            isActive: false },

                                            { 
                                                url: "#", 
                                                text: "SHOP", 
                                                isActive: false },

            


    ]
    return (
    
    <header>
        <img src="/src/assets/img/dc-logo.png" alt="DC Logo"/>
        <nav>
            <ul>
            {headerLinks.map((link, index) => (
            <li key={index} className={link.isActive ? "active" : ""}
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
                
               
                
              
                
            </ul>
        </nav>

    </header>
    )
}