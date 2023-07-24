import  Button from "react-bootstrap/Button"
import  Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import Input from "../Components/Input";
import Container from "react-bootstrap/Container";
import { create } from "../Services/productosServices";
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../Context/AuthContext"

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
    marginTop:"50px",
    marginBottom:"50px"
},
button:{
  width:"100%",
  height:"70px",
  backgroundColor:"#202d56"
},


}


function ProductosAlta() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
  const navigate= useNavigate();
  const {user} = useAuthContext()
  
  const onSubmit = async (data) =>{
    console.log(data);
    try {
      const document = await create(data, user?.token);
      console.log(document);
          if (document){
            //navigate("/")
        }  
    } catch (e) {
        console.log(e);
    }
  };



  return (
    <div>
        <div style={style.separador}>
          <h1 style={style.h1}>AGREGAR PRODUCTO</h1>
        </div>
      <Container style={style.container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Imagen"   register={{...register("thumbnail", { required: true })}} />
                  {errors.thumbnail && (
                    <div>
                        <span>This field is required</span>
                    </div>)}
            <Input label="Precio" register={{...register("price", { required: true })}}/>
                {errors.price && (
                <div>
                    <span>This field is required</span>
                </div>)}
            <Input label="Titulo" register={{...register("name", { required: true })}}  />
              {errors.name && (
                <div>
                    <span>This field is required</span>
                </div>)}
            <Input label="Descripcion"   register={{...register("description", { required: true })}} />
              {errors.description && (
                <div>
                    <span>This field is required</span>
                </div>)}

              <Button variant="primary" type="submit" style={style.button}>Guardar</Button>
        </Form>
        </Container>
    </div>
  );
}

export default ProductosAlta;
