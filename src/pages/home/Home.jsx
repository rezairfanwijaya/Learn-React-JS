import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigasi = useNavigate()
    const navigate =  () =>{
        navigasi("/navigasi")
    }
    return (
        <>
            <h1>Ini Halaman Home</h1>
            <button onClick={navigate}>
                Klik Saya Untuk navigasi
            </button>
        </>

    )
}