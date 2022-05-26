import { Link, Outlet } from "react-router-dom"

export default function About() {
    return (
        <>
            <h1>Ini Halaman About</h1>
            <Link to="/about/team">Team</Link>
            <Outlet/>
        </>
    )
}