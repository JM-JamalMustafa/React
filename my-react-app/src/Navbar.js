export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </li>
                
            </ul>
        </nav>
    );
}
