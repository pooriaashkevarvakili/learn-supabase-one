import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className='bg-black flex p-5'>
            <Link className='text-white no-underline'>shopping</Link>

            <li >

                <Link className='text-white no-underline ' to="/">Home</Link>
            </li>
            <li>

                <Link className='text-white no-underline' to="/create">create</Link>
            </li>
            <li >

                <Link className='text-white no-underline' to="/:id">Update</Link>
            </li>
            <li >

                <Link className='text-white no-underline' to="/login">login</Link>
            </li>
        </nav>
    )
}

export default Navbar