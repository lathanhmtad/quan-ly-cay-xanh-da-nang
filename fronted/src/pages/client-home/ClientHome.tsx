import ClientCarousels from "../../components/ClientCarousels";
import ClientCategories from "../../components/ClientCategories";
import ClientProjectImplemented from "../../components/ClientProjectImplemented";
import ClientNews from "../../components/ClientNews";
import ClientQA from "../../components/ClientQA";
import ClientAboutUs from "../../components/ClientAboutUs";

export default function ClientHome() {

    return <div>
        <ClientCarousels/>
        <div className='container'>
            <ClientCategories/>

            <ClientProjectImplemented/>
            <ClientNews/>
            <ClientQA/>
            <ClientAboutUs/>
        </div>
    </div>
}