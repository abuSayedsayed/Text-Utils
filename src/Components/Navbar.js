import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export class Navbar extends Component {
    render() {
        const { mode, changeMode } = this.props;

        return (
            <div>
                <nav
                    className={`navbar navbar-expand-lg navbar-${mode} bg-${
                        mode === 'light' ? 'light' : mode
                    } sticky-top align-it`}
                >
                    <div className="container-fluid">
                        <Link className="navbar-brand font-bold text-warning" to="/">
                            TextUtils
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>

                            {/* <div className="d-flex ms-auto">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-warning" type="submit">
                                    Search
                                </button>
                            </div> */}
                            <div className="d-flex justify-content-center align-items-center ms-auto">
                                <button
                                    type="button"
                                    className={`r ${mode === 'light' ? 'bordered' : ''}`}
                                    onClick={(event) => {
                                        changeMode(event.target.innerText);
                                    }}
                                >
                                    rgb(53, 0, 0)
                                </button>
                                <button
                                    type="button"
                                    className={`g ${mode === 'light' ? 'bordered' : ''}`}
                                    onClick={(event) => {
                                        changeMode(event.target.innerText);
                                    }}
                                >
                                    rgb(0, 10, 24)
                                </button>
                                <button
                                    type="button"
                                    className={`b ${mode === 'light' ? 'bordered' : ''}`}
                                    onClick={(event) => {
                                        changeMode(event.target.innerText);
                                    }}
                                >
                                    rgb(2, 0, 32)
                                </button>
                                <input
                                    type="color"
                                    className="customTheme"
                                    onClick={(event) => {
                                        changeMode(event.target.value);
                                    }}
                                />
                                <div className="form-check form-switch justify-content-center align-items-center align-self-center ms-auto ">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                        style={{ cursor: 'pointer' }}
                                        onChange={(event) => changeMode(event)}
                                    />
                                    <p
                                        className={`px-1 text-${
                                            mode === 'dark' ? 'light ' : 'dark '
                                        }`}
                                    >
                                        {mode === 'dark' ? 'Light ' : 'Dark '} Mode
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
