import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function GlobalLayout(props){
    return(
        <>
            <Navbar />
                {props.children}
            <Footer />
        </>
    )
}

export default GlobalLayout;