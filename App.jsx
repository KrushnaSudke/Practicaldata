import React, {useState,useEffect} from "react";
import axios from "axios";

const App =() => {
    const [users,setUsers] = useState([]);
    const [newUser,setNewUser] = useState({name:"", email:"",age:"" });
    const [userBtn,setUserBtn] = useState("Add user");
    const [userVarient,setUserVarient] = useState({bool: true, id:""});

    //API UIRS
    const BASE_URL = "http://localhost:3000/api";
    const getUsers = `${BASE_URL}/users`;
    const postUser = `${BASE_URL}/addUser`;
    
    //fetch data function
    const fetchUsers = async()=>{
    try{
        const response = await axios.get(getUsers);
        setUsers(response.data.reverse());
     } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    //call fetched data

    useEffect(()=>{
     fetchUsers();
    },[]);

    //add user in database
    const handleAddUser = async(e) =>{
        e.preventDefault();
        //check user update or add
        if (userVariant.bool){
            try{
                const emailExist = users.some((user) => user.email === newUser.email);
                // check exist email
                if(emailExists) {
                    alert("Email already exists.please use a different email.");
                }
                // add a new user
                else if(newUser.name && newUser.email && newUser.age){
                    const response=await axios.post(postUser,newUser);
                    setUsers([response.data,...users]);
                    setNewUser({name:"",email:"",age:""});
                }else{
                    alert("please fill in all fields");
                }
            }
            catch(error){
                console.error("Error adding user")
            }
            

        }
    }
    }
