import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"

const Nav = () => {
    return (
        <div>
            <div>
                <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
                    <div className={"container-fluid"}>
                    <Link href="/">
                        <a className={"navbar-brand"} style={{fontSize: 29}}>
                            The P <span style={{color: "black", backgroundColor: "#00EAD3", paddingLeft: 7, paddingRight: 7, borderRadius: 5}}>World</span>
                        </a>
                    </Link>
                    <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul style={{fontSize: 18}} className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                            <strong>
                            <li className={"nav-item"}>
                                <Link href="/">
                                    <a className={"nav-link active"}>Home</a>
                                </Link>
                            </li>
                            </strong>
                            <strong>
                            <li className={"nav-item"}>
                                <Link href="/about">
                                    <a className={"nav-link active"}>About</a>
                                </Link>
                            </li>
                            </strong>
                            <strong>
                            <li className={"nav-item"}>
                                <Link href="/contact">
                                    <a className={"nav-link active"}>Contact</a>
                                </Link>
                            </li>
                            </strong>
                            <strong>
                            <li className={"nav-item"}>
                                <Link href="/blog">
                                    <a className={"nav-link active"}>Articles</a>
                                </Link>
                            </li>
                            </strong>
                            <strong>
                            <li className={"nav-item"}>
                                <Link href="/videos">
                                    <a className={"nav-link active"}>Videos</a>
                                </Link>
                            </li>
                            </strong>
                        </ul>
                        <form className={"d-flex"}>
                            <input className={"form-control me-2"} type="search" placeholder="Search" aria-label="Search" />
                            <button className={"btn btn-outline-success"} type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
