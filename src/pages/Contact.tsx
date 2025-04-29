import { ContactHero } from "../components/ContactHero"




export const Contact: React.FC = () => {
    return <>
  <ContactHero key={'contact-page-hero'}/>
  <div className="w-full max-w-[1400px] mx-auto">
    {/* SIGN UP FORM */}
   <div className="py-4 flex items-center justify-center">
   <form action="submit">
      <div className="flex flex-row gap-3">
        <label htmlFor="name">Name:</label>
        <input className="bg-gray-100" id="name" type="text" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="number"></label>
        <input id="number" type="text" />
      </div>
    </form>
   </div>
  </div>
    </>
}