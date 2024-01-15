function Header() {
    return (
        <header className="flex justify-between items-center py-7">
            <a href="" className="text-xl font-bold">
                MyBlog
            </a>
            <nav className="flex gap-5">
                <a href="" className="text-xl">
                    Login
                </a>
                <a href="" className="text-xl">
                    Register
                </a>
            </nav>
        </header>
    );
}

export default Header;
