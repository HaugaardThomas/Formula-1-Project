import About from "../components/About";
import Produkter from "../components/Produkter";
import Kontakt from "../components/Kontakt";
import OpretNySubscription from "../components/Newsletter";



const Home = () => {
    return (

        // wrappes af Layout-component 
        <>
         
            <About />
            <Produkter />
            <Kontakt />
            <OpretNySubscription/>
          
         
    
        </>
    )
}

export default Home