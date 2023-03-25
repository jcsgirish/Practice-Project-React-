import React ,{useRef, useState} from "react";
import classes from "./User.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrappers";

const User =(props)=>{
    const Inputname=useRef()
    const Inputage=useRef()
    const Inputcollage=useRef()

   const [Error,setError]=useState()

    const AddUserhandler=(event)=>{
        event.preventDefault();
        const enteredname=Inputname.current.value;
        const enteredage=Inputage.current.value;
        const enteredcollage=Inputcollage.current.value;
        if(enteredname.trim().length===0||enteredage.trim().length===0|| enteredcollage.trim().length===0){
            setError({
                title:'Invalid Input',
                message:"Please Enter valid name,age and collagename."
            })

            return 
        }
        if(+enteredage<1){
            setError({
                title:"Invalid Input",
                message:"Please Enter valid age."
            });
            return 
        }
         
        props.onadduser(enteredname,enteredage,enteredcollage);
        Inputname.current.value='';
        Inputage.current.value='';
        Inputcollage.current.value='';
    };

    const errorhandler=()=>{
        setError(null)
    }
    return(
        <Wrapper>
            { Error && (<ErrorModal title={Error.title} message={Error.message}  onConfirm={errorhandler}></ErrorModal>
            )}

        <Card className={classes.input}>
        <form onSubmit={AddUserhandler}>  
            <label htmlFor ="Username">Name:</label>
            <input type ="text"  id="Username" ref={Inputname}></input>
            <label htmlFor="Userage">Age:</label>
            <input type="number"  id="UserAge" ref={Inputage}></input>
            <label htmlFor="Usercollage">CollageName:</label>
            <input type="text" id="UserCollage" ref={Inputcollage}></input>
            <Button type="submit" id="Userbutton">AddUser</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default User