import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
const Todos =() => {
    return(
        <div>
            <h1>All Todos</h1>
            <div>
                <TodoTile title={'creating a React App'}/>
                <TodoTile title={'Install Tailwind CSS'}/>
                <TodoTile title={'Commit code to Github'}/>
                <TodoTile title={'Host it on Netlify'}/>


            </div>
            <Link to={'/add'}>add  Todo</Link>

        </div>
    );
}

export default  Todos;