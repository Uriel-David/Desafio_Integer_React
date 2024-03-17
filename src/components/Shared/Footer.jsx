import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <nav>
                <Link to={'/'}>
                    <span className='button-navigation'>
                        Home
                    </span>
                </Link>
                <Link to={'/about'}>
                    <span className='button-navigation'>
                        About
                    </span>
                </Link>
            </nav>
        </footer>
    )
}

export default Footer