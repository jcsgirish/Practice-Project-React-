import React ,{useState} from "react";
import classes from "./User.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const User =(props)=>{

    
    const [enteredusername,setusername]=useState('')
    const [entereduserage,setuserage]=useState('')
   const [Error,setError]=useState()

    const AddUserhandler=(event)=>{
        event.preventDefault()

        if(enteredusername.trim().length===0||entereduserage.trim().length===0){
            setError({
                title:'Invalid Input',
                message:"Please Enter valid name and age."
            })

            return 
        }
        if(+entereduserage<1){
            setError({
                title:"Invalid Input",
                message:"Please Enter valid age."
            });
            return 
        }
      
    
        props.onadduser(enteredusername,entereduserage);
        setusername('')
        setuserage('')
     
    }

    

    const usernamechangehandler =(event)=>{
        setusername(event.target.value)
    }
    const useragechangehandler =(event)=>{
        setuserage(event.target.value)
    }
    const errorhandler=()=>{
        setError(null)
    }
   



    return(
        <div>
            { Error && (<ErrorModal title={Error.title} message={Error.message}  onConfirm={errorhandler}></ErrorModal>
            )}

        <Card className={classes.input}>
        <form onSubmit={AddUserhandler}>  
            <label htmlFor ="Username">Name:</label>
            <input type ="text"  id="Username" value={enteredusername} onChange={usernamechangehandler}></input>
            <label htmlFor="Userage">Age:</label>
            <input type="number"  id="UserAge" value={entereduserage} onChange={useragechangehandler}></input>
            <Button type="submit" id="Userbutton">AddUser</Button>
        </form>
        </Card>
        </div>
    )
}

export default User