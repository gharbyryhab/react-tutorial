import { Link, NavLink } from 'react-router-dom';
import './menu.css';
function Menu(props) {
    return (
        <ul>
            {props.role === 'student' && <li><NavLink className={(params) => params.isActive ? 'custom-link' : ''} to='/students/hello'>Hello</NavLink></li>}
            {props.role === 'teacher' && <li><NavLink className={(params) => params.isActive ? 'custom-link' : ''} to='/teachers/tasks'>Tasks</NavLink></li>}
        </ul>
    );
}
export default Menu;