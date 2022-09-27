import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='contentSpreadX'>
            <Link to="/">Home</Link>
            <Link to="/reviews">reviews</Link>
        </nav>
    )
}

export default Nav
