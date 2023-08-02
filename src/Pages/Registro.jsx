import  Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import Input from "../Components/Input";
import {Container } from "react-bootstrap";
import Check from '../Components/Check';
import { useState } from "react";
import ButtonWhitLoading from "../Components/buttonWhitLoading"
import {useAuthContext} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const style={
  separador:{
      height:"500px",
      backgroundColor:"#027fbb",
      display:"flex",
      justifyContent:"center"
  },
  h1:{
      color:"white",
      marginTop:"200px",
      fontSize:"60px",
      fontWeight:"900"
  },
  container:{
    maxWidth:"370px",
    marginTop:"50px"
},
  button:{
    width:"100%",
    height:"70px",
    backgroundColor:"#202d56"
  },
}

function Registro() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
  const [alert,setAlert] = useState({variant:"",text:""})
  const[loading, setLoading] = useState(false)
  const {signup,isAuthenticated,errors: registerErrors} = useAuthContext();
  const navigate = useNavigate()

 useEffect(() => {
    if(isAuthenticated){
      setLoading(false)
      setAlert({variant:"success",text:"Usuario registrado correctamente"})
      setTimeout(() => {
        navigate("/")}
        , 2500);}
    },[isAuthenticated,navigate])
 
 useEffect(() => {
    if(registerErrors.length > 0){
      setLoading(false)}},[registerErrors])
    
 const onSubmit = handleSubmit(async (values) =>{
    setLoading(true)
    signup(values)
  })

 
  return (
    <div>
      <div style={style.separador}>
          <h1 style={style.h1}>BIENVENIDO/A!</h1>
      </div>
      <Container style={style.container}>
        <Form 
          onSubmit={onSubmit}
          >
          <Input label="Nombre de ususario" autoComplete="new" register={{...register("userName", { required: true })}}/>
            {errors.userName && (
              <div>
                  {errors.userName?.type === "required" && <span>This field is required</span> }
                  {errors.userName?.type === "unique" && <span>Este usuario ya esta registrado</span> }
              </div>)}

          <Input label="E-mail"  type='email' autoComplete="newEmail" register={{...register("email", { required: true })}} />
            {errors.email && (
              <div>
                  {errors.email?.type === "required" && <span>This field is required</span> }
                  {errors.email?.type === "unique" && <span>Este usuario ya esta registrado</span> }
              </div>)}
          <Input label="Contraseña" type="password" autoComplete="newPassword" id="password" register={{...register("password", { required: true,pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}(?=.*[$&+,:;=?@#|'<>.^*()%!-])/})}} />
            {errors.password && (
              <div>
                {errors.password?.type === "required" && <span>This field is required</span> }
                {errors.password?.type === "pattern" && <span>La contraseña debe tener al menos una letra mayuscula, una minuscula, un numero y un caracter especial</span> }
              </div>)}
          <ButtonWhitLoading variant="primary" type="submit" loading={loading} style={style.button}>
            Registrarse
          </ButtonWhitLoading>
          {alert && <Check {...alert} />}
        </Form>
        <div>
          {
            registerErrors.map((error,i)=>(
              <div key={i}>
                {error}
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Registro