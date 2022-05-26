import { Link } from 'react-router-dom';
export default function Blog() {
    return (
        <>
            <h2>Halaman Blog</h2>
            <ul>
                <li>
                    <Link to="artikel-pertama">Arikel Pertama</Link>
                </li>

                <li>
                    <Link to="artikel-kedua">Arikel Kedua</Link>
                </li>

                <li>
                    <Link to="artikel-ketiga">Arikel Ketiga</Link>
                </li>

                <li>
                    <Link to="artikel-keempat">Arikel Keempat</Link>
                </li>

            </ul>
        </>
    )
}