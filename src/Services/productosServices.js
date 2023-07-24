//import axios
//import instance from "../config/axios"
import firebase from "../config/firebase"

export async function getAll(){
    return fetch (`http://localhost:3000/products`)
    .then ((res => res.json()))
}

export async function getCarousel(){
    const querySnapshot = await firebase
        .firestore()
        .collection("CarouselImg")
        .get();
    return (querySnapshot.docs)
}


export async function getById(id){
    return fetch (`http://localhost:3000/products/${id}`)
    .then ((res => res.json()))
}


export async function create(data){
    // eslint-disable-next-line no-sequences
    return fetch (`http://localhost:3000/products/`,{   
        method:"POST",
        body:JSON.stringify(data)
    })
    .then((res)=> res.json())
}


export async function update(id,data){
    return await firebase
        .firestore()
        .doc(`Productos/${id}`)
        .set(data)
}

export async function remove(id){
    return await firebase
        .firestore()
        .doc(`Productos/${id}`)
        .delete()
}