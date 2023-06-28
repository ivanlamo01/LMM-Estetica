import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthContext } from '../Context/AuthContext';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useFetchProducts } from "../Utils/useFetchProducts";
import logo from "../Assets/img/5ec82b684c8d567f28381556394870-480-0.webp";
import '../styles/nav.css';

const style={
    header:{
        width:"100%",
        fontWeight:"500",
        fontFamily: "Istok Web",
        fontSize:"15px",
        height:"90px",
        display: "flex",
        justifyContent:"center"
    },
    topbar:{
        backgroundColor:"#FFFFFF00",
        fontWeight:"700",
        padding:"10px",
        display:"flex",
        justifyContent:"center",
    },
    grat:{
        color:"#202d56"
    },
    button:{
        width:"100px",
        height:"50px",
        backgroundColor:"#202d56"
    },
    buscar:{
        margin:"10px"
    },
    logo:{
        backgroundImage:`url(${logo})`,
        zIndex:15000
    },
}

function NavBar(){
    const {login,handleLogout,user} = useAuthContext()
    const navIcon= (
        <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><ellipse cx="32" cy="24" rx="12" ry="16"/><path d="M22 33.46s-10.09 2.68-12 8A33 33 0 0 0 8 56h48a33 33 0 0 0-1.94-14.54c-1.93-5.32-12-8-12-8"/></svg>
    )

    const [isScrolled, setIsScrolled] = useState(false);  
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 50){
            setIsScrolled(true)
        }
        if(window.scrollY <= 50){
            setIsScrolled(false)
        }
    })



    const {buscar,setBuscar}=useFetchProducts()

    return (
        <>  

            <header style={style.header} className="header">
                
            <Navbar  collapseOnSelect expand="lg"  
                    style={{backgroundColor:"#ffffff ",
                            height: isScrolled? "70px":"110px",
                            position:"fixed",
                            top: isScrolled? "0px":"auto",
                            transition:"all .5s",
                            display:"flex",
                            width:"100%",
                            zIndex:"99",
                            }}>
                <Container>
                    
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" width={100}/></Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/" className='links' >Inicio</Nav.Link>
                            {login &&(
                                <>
                                    <Nav.Link as={Link} to="/productos/ProductosAlta" className="links">Agregar Producto</Nav.Link>
                                </>
                            )} 
                        <Nav.Link as={Link} to="/" >Productos</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros" className="links" >Quienes Somos</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros" className="links">Como Comprar</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros" className="links">Politica de devolucion</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros" className="links">Catalogo Andrea Pelegrino</Nav.Link>
                        </Nav>

                        <Nav>                    
                            {!login &&(
                                <>
                                    <NavDropdown title={navIcon}  id="basic-nav-dropdown" style={{color:"#fafafa"}}>
                                        <NavDropdown.Item as={Link} to="/alta" >Registrarse</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/ingresar" >LogIn</NavDropdown.Item>
                                    </NavDropdown>
                                </> )}  
                                {login && <div>     
                                            <NavDropdown title= {user.nombre} id="basic-nav-dropdown" style={{color:"#fafafa"}}>
                                                <NavDropdown.Item  onClick={()=>handleLogout()} >Salir </NavDropdown.Item>
                                            </NavDropdown>
                                        </div>}
                        </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>
        </>
    );

}


export default NavBar;



/*                        <Nav.Link ><div style={style.buscar}>
                        <input type="text"  onChange={(event)=>setBuscar(event.target.value)} />
                        <Button variant="primary" type="submit" value={buscar} style={style.button}>Buscar</Button>
                        </div></Nav.Link>
                        */