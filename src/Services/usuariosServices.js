import firebase from "../config/firebase"

export async function getByUserId(userId){
    return await firebase.firestore().collection(`Usuarios`)
    .where("userId","==",userId)
    .get()
}

export async function login(data){
    return fetch (`http://localhost:3000/users/login`,{   
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
    .then((res)=> res.json())
}