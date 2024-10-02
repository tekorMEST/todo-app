import { useNavigate } from "react-router-dom";

const AddTodos =() => {
    const navigate= useNavigate();

    const saveTodo=(event) => {
        event. preventDefault();
        //post data to todo api
        //Goto the homepage
        navigate('/');

    }

    return(
        <div>
            <h1> Add A new Todo</h1>
            <form onSubmit={saveTodo} >
            <input type="text" placeholder="enter your task" required/>
            <button type="submit">submit</button>
            

            </form>
        </div>
    );
}

export default  AddTodos;