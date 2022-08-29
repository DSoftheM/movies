import './Header.css';

export default function Header() {
    return (
        <>
            <nav className="indigo darken-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Repository</a></li>
                    </ul>
                </div>
            </nav>

        </>
    );
};
