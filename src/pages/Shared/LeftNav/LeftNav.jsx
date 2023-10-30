import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./LeftNav.css"

const LeftNav = () => {
    return (
        <section>
            <h5>All Category</h5>
            <div className='Link-Container'>
                <Link to={""}>Trendy Topic</Link>
                <Link to={""}>The Big Bang</Link>
                <Link to={""}>Dark Energy</Link>
                <Link to={""}>The Multiverse</Link>
                <Link to={""}>Trendy Topic</Link>
                <Link to={""}>The Big Bang</Link>
                <Link to={""}>Dark Energy</Link>
                <Link to={""}>The Multiverse</Link>
            </div>
        </section>
    );
};

export default LeftNav;