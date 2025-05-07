import { Link } from "react-router-dom";
import { useRef, useState, useEffect} from "react";
import { listings } from "../data/listings";
import listingBanner from "../assets/pics/SVG/listing-banner.svg";





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
    <div className="w-full px-4 md:px-0 py-20 mt-10 ">
    <div className="w-full max-w-[1400px] mx-auto aspect-[4/1] px-2 mb-10 md:px-0 flex items-center justify-center relative">
    <h1 className="z-30 text-3xl md:text-8xl text-white">ACTIVE LISTINGS</h1>
  <img src={listingBanner} className="w-full h-full object-cover opacity-80 blur-[6px] absolute top-0 left-0 z-20" alt="Banner" />
</div>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* MAP THROUGH THE LISTINGS AND PASS IN THE LISTING AND INDEX */}
        {listings.map((listing, index) => (
            <>

            {/* ADDRESS FOR LISTINGS */}
            <p className="mb-2 text-white max-w-[400px] translate-y-[60%] z-40 relative p-2 bg-spurs-charcoal ">{listing.address}</p>

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
            <div className="absolute z-40 bottom-6 right-3">
              <div className="bg-spurs-charcoal border-spurs-orange py-3 px-2 transition duration-300 ease-out hover:scale-105">
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