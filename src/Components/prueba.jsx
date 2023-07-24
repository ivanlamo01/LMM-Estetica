import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { useFetchProducts } from "../Utils/useFetchProducts";
import logo from "../Assets/img/5ec82b684c8d567f28381556394870-480-0.webp";



function NavBar() {
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
        <header className='header'>
                
        <Navbar  collapseOnSelect expand="lg"  className='navbar'
                style={{
                    top: isScrolled? "0px":"auto",
                    height: isScrolled? "70px":"110px",
                    position:"fixed",
                    borderBottom: isScrolled? "solid 1px #d8d8d8":"0px"}}>
            
                <div className='logo'><Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" width={100} /></Navbar.Brand></div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav  className="me-auto">
                    <Nav.Link as={Link} to="/" ><span className='links'>INICIO</span></Nav.Link>
                        {login &&(
                            <>
                                <Nav.Link as={Link} to="/productos/ProductosAlta" ><span className='links'>Agregar Producto</span></Nav.Link>
                            </>
                        )} 
                    <Nav.Link as={Link} to="/" ><span className='links'> PRODUCTOS </span></Nav.Link>
                    <Nav.Link as={Link} to="/Nosotros"  ><span className='links'> NOSOTROS </span></Nav.Link>
                    <Nav.Link as={Link} to="/Nosotros" ><span className='links'> CÓMO COMPRAR</span></Nav.Link>
                    <Nav.Link as={Link} to="/Nosotros" ><span className='links'>POLÍTICA DE DEVOLUCIÓN</span></Nav.Link>
                    <Nav.Link as={Link} to="/Nosotros" ><span className='links'> CATALOGO ANDREA PELLEGRINO</span></Nav.Link>
                    
                    <div className= "buscar" >  
                        <Nav.Link >
                            <input type="text"  onChange={(event)=>setBuscar(event.target.value)} onSubmit={buscar} />
                            <button value={buscar} type="submit" ></button>
                        </Nav.Link>
                    </div>

                    </Nav>

                    <div className='dropdown'>
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
                    </div>
                    
            </Navbar.Collapse>
        </Navbar>
        </header>
        </>
    );}
export default NavBar;


/*                        <Nav.Link ><div style={style.buscar}>
                        <input type="text"  onChange={(event)=>setBuscar(event.target.value)} />
                        <Button variant="primary" type="submit" value={buscar} style={style.button}>Buscar</Button>
                        </div></Nav.Link>
                        */