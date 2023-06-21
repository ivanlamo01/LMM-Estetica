import back from "../Assets/img/paisajes-paisajes-camping_63047-195.jpg"
import ProductosCarousel from "./productosCarousel"

const style ={
    main:{
        width:"100%",
        height:"1080px",
        backgroundImage: `url(${back})`,
        display:"flex",
        justifyContent:"space-evenly" 
    },
    carousel:{
        width:"500px",
        marginTop:"200px",
    },
    text:{
        color:"white",
        marginTop:"300px",
        fontWeight:"1300",
    }
}


function Main() {
    return (
        <>
        <div style={style.main}>
            <div style={style.text}>
                    <h1 style={{fontWeight:"700",fontFamily:"'Visby CF',sansSerif",}}>
                    Las mejores cabañas de la region
                    </h1>
                    <h1 style={{fontWeight:"700"}}>
                        Veni a disfrutar de la naturaleza
                    </h1>
                    <h3 style={{fontWeight:"700",fontFamily:"'Visby CF',sansSerif",}}>Cabañas . Carpas . Parrilla. Camping</h3>
                
                    
            </div>
            <div style={style.carousel}>
                <ProductosCarousel />
            </div>
        </div>
        </>
    );}

export default Main;