import Producto from  "./Producto"

import Row from "react-bootstrap/Row";
import Loading from "./Loading/Loading"
import { useFetchProducts } from "../Utils/useFetchProducts";



function Productos(){  
    const {productos,loading}=useFetchProducts()
        return (
                <>
                    <Loading loading={loading}>


                    <Row>
                        {productos.map((product) => (
                            <Producto{...product.data()}
                                key={product.id}
                                id={ product.id }
                            />)
                        )}
                    </Row>
                    </Loading>
                </>
            );
        }



export default Productos;
