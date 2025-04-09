import { useState } from "react"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"
import { IgEmbed } from "../components/IgEmbed"


interface  FormData {
    firstName: string
    lastName: string
    phone: string
    email: string
    location: string
}



export const InvestorNetwork: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
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
            location: '',
        })
    }
    return <>
    <Hero />
    <div className="max-w-[1200px] mx-auto py-[100px] flex flex-col md:flex-row gap-25 items-center justify-center">
<a href="https://www.instagram.com/david24_7realestate/">
    <div className="w-full min-w-[600px] bg-gray-900 h-[600px]">
        <IgEmbed />
        </div> 
</a>
   <div className="w-full min-w-[800px]">
   <h1 className="text-gray-800 font-bold text-2xl md:text-5xl text-center mb-5">
            LOOKING FOR OFF MARKET DEALS?
          </h1>
        <form onSubmit={handleSubmit} className="bg-gray-900 text-xl font-bold mb-4 shadow-md px-10 py-20">
          <div className="flex gap-5">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          </div>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Where are you buying?" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <div className="flex gap-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="propertyType">
  Type of Property
</label>
<select
  id="propertyType"
  name="propertyType"
  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800"
>
  <option value="">Select a property type</option>
  <option value="single-family">Single-Family</option>
  <option value="multi-family">Multi-Family</option>
  <option value="condo">Condo</option>
  <option value="townhouse">Townhouse</option>
  <option value="land">Vacant Land</option>
  <option value="mobile-home">Mobile Home</option>
  <option value="other">Other</option>
</select>
            </div>
            <button type="submit" className="mx-auto block bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-900 mt-10">SUBMIT</button>
        </form>
   </div>
    </div>
    <Footer />
    </>
}