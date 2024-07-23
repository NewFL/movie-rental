import './App.css';

export default function Navbar (){
    return <nav className="nav">
        <div class="header-container mb-5">
            <a href="/" className="site-title bright-text h1">Movie Rental</a>
        </div>
        <div className='navigation-banner mb-3'>
            <ul>
                <li className='active'>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/your-movies"> Your movies</a>
                </li>
                <li>
                    <a href="profile">Profile</a>
                </li>
            </ul>
        </div>
    </nav>
}