import { useState } from "react"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"


interface  FormData {
    firstName: string
    lastName: string
    phone: string
    email: string

}



export const Offer: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
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
            email: ''
        })
    }
    return <>
    <Hero />
    <div className="max-w-[1200px] mx-auto py-[100px]">
        
   <div>
   <h1 className="text-gray-800 font-bold text-2xl md:text-5xl text-center mb-5">
            GET AN OFFER FAST
          </h1>
        <form onSubmit={handleSubmit} className="bg-gray-900 text-xl font-bold mb-4 shadow-md px-5 py-10">
          <div className="flex gap-5">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
          </div>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="my-3 bg-white w-full p-2 mb-2 border-rounded"/>
            <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-red-900 mt-3">SUBMIT</button>
        </form>
   </div>
    </div>
    <Footer />
    </>
}