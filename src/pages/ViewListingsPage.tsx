import { Footer } from "../components/Footer"
import { Listings } from "../components/Listings"
import { Navbar } from "../Navbar"




export const ViewListingsPage: React.FC = () => {
    return <>
    <Navbar />
    <Listings />
    <Footer />
    </>
}