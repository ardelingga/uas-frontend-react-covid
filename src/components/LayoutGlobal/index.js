import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function LayoutGlobal(props){
    return(
        <>
            <Navbar />
                {props.children}
            <Footer />
        </>
    )
}

export default LayoutGlobal;