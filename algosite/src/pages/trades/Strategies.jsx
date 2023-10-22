import Mnqall from "../../3d/Mnqall.jsx";
import Header from "../../components/Header/Header";

function Strategies() {
    return (  
        <>
<Header/>
        <div className="wrapper
relative
w-[100%]
h-[100%]
        ">
            <div className="trades-cont
w-[100vw]
flex
h-[100vh]
bg-[#000000]
            ">
                <Mnqall/>
            </div>
        </div>
        </>
    );
}

export default Strategies;