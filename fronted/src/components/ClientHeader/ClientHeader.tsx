import './ClientHeader.scss'
import ClientTopBar from "../ClientTopBar";
import ClientNav from "../ClientNav";

export default function ClientHeader() {
    return <header>
        <ClientTopBar/>
        <ClientNav/>
    </header>
}