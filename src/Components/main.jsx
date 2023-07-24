
import ControlledCarousel from "./carouselHome";

const style ={

    carousel:{
        width:"100%",
        backgroundColor:"#000000",
        marginRight:"20px",
        height:"500px"
    },
}

function Main() {
    return (
        <>
        <div style={style.main}>
            </div>
            <div style={style.carousel}>
                <ControlledCarousel/>
            </div>
        </>
    );}

export default Main;