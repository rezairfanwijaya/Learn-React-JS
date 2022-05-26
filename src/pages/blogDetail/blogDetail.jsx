import { useParams } from "react-router-dom"
import ArtikelPertama, { ArtikelKedua, ArtikelKeempat, ArtikelKetiga } from "../../components/blogDetailComp/blogDetailComp"

export default function BlogDetail() {
    const urlParams = useParams()
    let judul = urlParams.judul

    switch (judul) {
        case "artikel-pertama":
            return <ArtikelPertama />
        case "artikel-kedua":
            return <ArtikelKedua />
        case "artikel-ketiga":
            return <ArtikelKetiga />
        case "artikel-keempat":
            return <ArtikelKeempat />
        default:
            return <h1>Alamat Tidak Ditemukan</h1>
    }

}