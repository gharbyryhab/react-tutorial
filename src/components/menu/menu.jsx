import { Link } from 'react-router-dom';
function Menu() {
    return (
        <ul>
            <li><Link to='/hello'>Hello</Link></li>
            <li><Link to='/tasks'>Tasks</Link></li>
        </ul>
    );
}
export default Menu;