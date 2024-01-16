import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center py-7">
            <Link to="/" className="text-xl font-bold">
                MyBlog
            </Link>
            <nav className="flex gap-5">
                <Link to="/login" className="text-xl">
                    Login
                </Link>
                <Link to="/register" className="text-xl">
                    Register
                </Link>
            </nav>
        </header>
    );
}

export default Header;
