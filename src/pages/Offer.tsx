import { useState } from "react"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"
import { IgEmbed } from "../components/IgEmbed"


interface  FormData {
    firstName: string
    lastName: string
    phone: string
    email: string
    address: string
}



export const Offer: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
    })
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
    const { name, value } = e.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted Data:', formData)
        // can send this data to my backend or firebase
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
        })
    }
    return <> 
    <Hero />
    <div className="max-w-[1200px] mx-auto w-full my-10 md:py-[100px] flex flex-col md:flex-row gap-5 items-center justify-center">
<a className="w-full shadow-lg" href="https://www.instagram.com/david24_7realestate/">
    <div className="w-full h-[300px] md:h-[600px]">
        <IgEmbed />
        </div> 
</a>
   <div className="w-full">
   <h1 className="text-gray-700  text-2xl md:text-5xl text-center mb-5">
            GET AN OFFER FAST
          </h1>
        <form onSubmit={handleSubmit} className="bg-gray-700 text-xl font-bold mb-4 shadow-md px-2 md:px-10 py-20">
          <div className="flex gap-5">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          </div>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Please provide an address" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <button type="submit" className="mx-auto block bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-900 mt-10">SUBMIT</button>
        </form>
   </div>
    </div>
    <Footer />
    </>
}