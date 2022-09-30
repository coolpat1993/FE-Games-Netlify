import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='contentSpreadX navbar'>
            <Link to="/">Home</Link>
            <Link to="/reviews">All reviews</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Nav
