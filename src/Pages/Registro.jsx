import { useState } from "react";
import "./reg.css";
import {createUser} from "../Services/usuariosServices"
import FormInput from "../Components/forminput"

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  console.log(values); 

  const inputs = [

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
 
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const form = document.getElementById('form')
    if(form){  
    form.addEventListener("submit",function(e){
    e.preventDefault();
    const payload = new FormData(form)
    console.log([...payload]);
    fetch (`http://localhost:3000/users`,{   
      method:"POST",
      headers:{
          'Content-Type': "application/json",
      },
      body: payload,
  })
  .then((res)=> res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  })}
  
  return (
    <div className="ap">
      <form onSubmit={handleSubmit} id='form'>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;


/*import  Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import Input from "../Components/Input";
import {Container } from "react-bootstrap";
import Check from '../Components/Check';
import { useState } from "react";
import ButtonWhitLoading from "../Components/buttonWhitLoading"


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
  const [values,setValues] = useState(
    {
      username:"",
      email:"",
      password:"",
    }
  )



  const onSubmit = async (data) =>{
    setLoading(true)
    console.log(data);
    try {

          if (document){
            setAlert({variant:"success", text: "¡Registro Exitoso!",duration: 3000, link:"/ingresar"});
            setLoading(false)
        }
    } catch (e) {
        setAlert({variant:"danger", text: "Error"});
        console.log(e);
        setLoading(false);
    }
  };

  return (
    <div>
      <div style={style.separador}>
          <h1 style={style.h1}>BIENVENIDO/A!</h1>
      </div>
      <Container style={style.container}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Nombre" register={{...register("nombre", { required: true })}}/>
            {errors.nombre && (
              <div>
                  <span>This field is required</span>
              </div>)}
          <Input label="Apellido" register={{...register("apellido", { required: true })}}  />
            {errors.apellido && (
              <div>
                  <span>This field is required</span>
              </div>)}
          <Input label="E-mail"  type='email' autoComplete="newUsername" register={{...register("email", { required: true })}} />
            {errors.email && (
              <div>
                  <span>This field is required</span>
              </div>)}
          <Input label="Contraseña" type="password" autoComplete="newPassword"  register={{...register("password", { required: true, minLength:6})}} />
            {errors.password && (
              <div>
                {errors.password?.type === "required" && <span>This field is required</span> }
                {errors.password?.type === "minLength" && <span>*Debe tener al menos 6 caracteres</span> }
              </div>)}
          <ButtonWhitLoading variant="primary" type="submit" loading={loading} style={style.button}>
            Registrarse
          </ButtonWhitLoading>
          {alert && <Check {...alert} />}
        </Form>
      </Container>
    </div>
  );
}

export default Registro;
*/