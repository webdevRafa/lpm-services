import { Link } from "react-router-dom";
import { useRef, useState, useEffect} from "react";
import { listings } from "../data/listings";






export const Listings: React.FC = () => {
    
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
const [visibleStates, setVisibleStates] = useState<boolean[]>([]);
   useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, imageRefs.current.length);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const index = imageRefs.current.indexOf(entry.target as HTMLDivElement);
                if (index !== -1 && entry.isIntersecting) {
                    setVisibleStates((prev) => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                }
            });
        },
        { threshold: 0.2 }
    );

    imageRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
    });

    return () => {
        imageRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
    };
   }, []);
    return <>
    <div className="w-full px-4 md:px-0 py-20 mt-20 md:mt-40">
        <h1 className="text-center mb-10 uppercase md:text-3xl bg-spurs-charcoal max-w-[300px] py-4 px-4 text-white mx-auto">Active Listings</h1>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* MAP THROUGH THE LISTINGS AND PASS IN THE LISTING AND INDEX */}
        {listings.map((listing, index) => (
            <>

            {/* ADDRESS FOR LISTINGS */}
            <h1 className="mb-2 text-spurs-charcoal">{listing.address}</h1>

            {/* GRID FOR LISTINGS PREVIEW */}
            <div className="preview-grid h-full  relative z-30 mb-10" key={index}>
          
            {listing.gallery.slice(0, 5).map((image, i) => {
  const globalIndex = index * 5 + i; // unique index across all listings
  return (
    <div
      key={i}
      ref={(el) => {
        imageRefs.current[globalIndex] = el;
      }}
      className={`transition duration-500 ease-out transform delay-${i + 100} ${
        visibleStates[globalIndex] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${i === 0 ? 'item item-main shadow-md' : 'item shadow-md'}`}
    >
      <img src={image} alt={`${listing.name} preview ${i + 1}`} />
    </div>
  );
})}

            {/* SEE ALL PHOTOS BUTTON */}
            <Link to={`/listings/${listing.name.toLowerCase()}`}>
            <div className="absolute z-40 bottom-3 right-3">
              <div className="bg-spurs-charcoal py-3 px-2 transition duration-300 ease-out hover:scale-105">
                <button className="cursor-pointer text-white ">see all {listing.gallery.length} photos</button>
              </div>
            </div>
            </Link>
           
            </div>
            </>
        ))}
      </div>
    </div>
    </>
}