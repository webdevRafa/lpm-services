
import { useRef, useState, useEffect} from "react";


// chancery gallery
const chanceryGallery = [chancery1, chancery2, chancery3, chancery4, chancery5, chancery6, chancery7, chancery8, chancery9, chancery10, chancery11, chancery12, chancery13, chancery14,
    chancery15, chancery16, chancery17, chancery18, chancery19, chancery20, chancery21, chancery22, chancery23, chancery24, chancery25, chancery26, chancery27, chancery28, chancery29, chancery30,
    chancery31, chancery32, chancery33, chancery34, chancery35
];
// hickory gallery
const hickoryGallery = [hickory1, hickory2, hickory3, hickory4, hickory5, hickory6, hickory7, hickory8, hickory9, hickory10, hickory11, hickory12, hickory13, hickory14, hickory15, hickory16, hickory17, 
    hickory18, hickory19, hickory20, hickory21, hickory22, hickory23, hickory24, hickory25, hickory26, hickory27, hickory28, hickory29, hickory30, hickory31, hickory32, hickory33, hickory34, hickory35,
    hickory36, hickory37, hickory38
];
// laurel gallery
const laurelGallery = [laurel1, laurel2, laurel3, laurel4, laurel5, laurel6, laurel7, laurel8, laurel9, laurel10, laurel11, laurel12, laurel13, laurel14, laurel15, laurel16, laurel17, laurel18, laurel19,
    laurel20, laurel21, laurel22, laurel23, laurel24, laurel25, laurel26, laurel27
];
// sangria gallery
const sangriaGallery = [sangria1, sangria2, sangria3, sangria4, sangria5, sangria6, sangria7, sangria8, sangria9, sangria10, sangria11, sangria12, sangria13, sangria14, sangria15, sangria16, sangria17, sangria18, 
    sangria19, sangria20, sangria21, sangria22, sangria23, sangria24, sangria25, sangria26, sangria27, sangria28, sangria29, sangria30, sangria31, sangria32, sangria33, sangria34, sangria35, sangria36, sangria37, 
    sangria38, sangria39, sangria40, sangria41, sangria42
];
// chancery images
import chancery1 from "../assets/pics/listings/chancery-1.webp";
import chancery2 from "../assets/pics/listings/chancery-2.webp";
import chancery3 from "../assets/pics/listings/chancery-3.webp";
import chancery4 from "../assets/pics/listings/chancery-4.webp";
import chancery5 from "../assets/pics/listings/chancery-5.webp";
import chancery6 from "../assets/pics/listings/chancery-6.webp";
import chancery7 from "../assets/pics/listings/chancery-7.webp";
import chancery8 from "../assets/pics/listings/chancery-8.webp";
import chancery9 from "../assets/pics/listings/chancery-9.webp";
import chancery10 from "../assets/pics/listings/chancery-10.webp";
import chancery11 from "../assets/pics/listings/chancery-11.webp";
import chancery12 from "../assets/pics/listings/chancery-12.webp";
import chancery13 from "../assets/pics/listings/chancery-13.webp";
import chancery14 from "../assets/pics/listings/chancery-14.webp";
import chancery15 from "../assets/pics/listings/chancery-15.webp";
import chancery16 from "../assets/pics/listings/chancery-16.webp";
import chancery17 from "../assets/pics/listings/chancery-17.webp";
import chancery18 from "../assets/pics/listings/chancery-18.webp";
import chancery19 from "../assets/pics/listings/chancery-19.webp";
import chancery20 from "../assets/pics/listings/chancery-20.webp";
import chancery21 from "../assets/pics/listings/chancery-21.webp";
import chancery22 from "../assets/pics/listings/chancery-22.webp";
import chancery23 from "../assets/pics/listings/chancery-23.webp";
import chancery24 from "../assets/pics/listings/chancery-24.webp";
import chancery25 from "../assets/pics/listings/chancery-25.webp";
import chancery26 from "../assets/pics/listings/chancery-26.webp";
import chancery27 from "../assets/pics/listings/chancery-27.webp";
import chancery28 from "../assets/pics/listings/chancery-28.webp";
import chancery29 from "../assets/pics/listings/chancery-29.webp";
import chancery30 from "../assets/pics/listings/chancery-30.webp";
import chancery31 from "../assets/pics/listings/chancery-31.webp";
import chancery32 from "../assets/pics/listings/chancery-32.webp";
import chancery33 from "../assets/pics/listings/chancery-33.webp";
import chancery34 from "../assets/pics/listings/chancery-34.webp";
import chancery35 from "../assets/pics/listings/chancery-35.webp";
// hickory images
import hickory1 from "../assets/pics/listings/hickory-1.webp"
import hickory2 from "../assets/pics/listings/hickory-2.webp"
import hickory3 from "../assets/pics/listings/hickory-3.webp"
import hickory4 from "../assets/pics/listings/hickory-4.webp"
import hickory5 from "../assets/pics/listings/hickory-5.webp"
import hickory6 from "../assets/pics/listings/hickory-6.webp"
import hickory7 from "../assets/pics/listings/hickory-7.webp"
import hickory8 from "../assets/pics/listings/hickory-8.webp"
import hickory9 from "../assets/pics/listings/hickory-9.webp"
import hickory10 from "../assets/pics/listings/hickory-10.webp"
import hickory11 from "../assets/pics/listings/hickory-11.webp"
import hickory12 from "../assets/pics/listings/hickory-12.webp"
import hickory13 from "../assets/pics/listings/hickory-13.webp"
import hickory14 from "../assets/pics/listings/hickory-14.webp"
import hickory15 from "../assets/pics/listings/hickory-15.webp"
import hickory16 from "../assets/pics/listings/hickory-16.webp"
import hickory17 from "../assets/pics/listings/hickory-17.webp"
import hickory18 from "../assets/pics/listings/hickory-18.webp"
import hickory19 from "../assets/pics/listings/hickory-19.webp"
import hickory20 from "../assets/pics/listings/hickory-20.webp"
import hickory21 from "../assets/pics/listings/hickory-21.webp"
import hickory22 from "../assets/pics/listings/hickory-22.webp"
import hickory23 from "../assets/pics/listings/hickory-23.webp"
import hickory24 from "../assets/pics/listings/hickory-24.webp"
import hickory25 from "../assets/pics/listings/hickory-25.webp"
import hickory26 from "../assets/pics/listings/hickory-26.webp"
import hickory27 from "../assets/pics/listings/hickory-27.webp"
import hickory28 from "../assets/pics/listings/hickory-28.webp"
import hickory29 from "../assets/pics/listings/hickory-29.webp"
import hickory30 from "../assets/pics/listings/hickory-30.webp"
import hickory31 from "../assets/pics/listings/hickory-31.webp"
import hickory32 from "../assets/pics/listings/hickory-32.webp"
import hickory33 from "../assets/pics/listings/hickory-33.webp"
import hickory34 from "../assets/pics/listings/hickory-34.webp"
import hickory35 from "../assets/pics/listings/hickory-35.webp"
import hickory36 from "../assets/pics/listings/hickory-36.webp"
import hickory37 from "../assets/pics/listings/hickory-37.webp"
import hickory38 from "../assets/pics/listings/hickory-38.webp"
// laurel images
import laurel1 from "../assets/pics/listings/laurel-1.webp";
import laurel2 from "../assets/pics/listings/laurel-2.webp";
import laurel3 from "../assets/pics/listings/laurel-3.webp";
import laurel4 from "../assets/pics/listings/laurel-4.webp";
import laurel5 from "../assets/pics/listings/laurel-5.webp";
import laurel6 from "../assets/pics/listings/laurel-6.webp";
import laurel7 from "../assets/pics/listings/laurel-7.webp";
import laurel8 from "../assets/pics/listings/laurel-8.webp";
import laurel9 from "../assets/pics/listings/laurel-9.webp";
import laurel10 from "../assets/pics/listings/laurel-10.webp";
import laurel11 from "../assets/pics/listings/laurel-11.webp";
import laurel12 from "../assets/pics/listings/laurel-12.webp";
import laurel13 from "../assets/pics/listings/laurel-13.webp";
import laurel14 from "../assets/pics/listings/laurel-14.webp";
import laurel15 from "../assets/pics/listings/laurel-15.webp";
import laurel16 from "../assets/pics/listings/laurel-16.webp";
import laurel17 from "../assets/pics/listings/laurel-17.webp";
import laurel18 from "../assets/pics/listings/laurel-18.webp";
import laurel19 from "../assets/pics/listings/laurel-19.webp";
import laurel20 from "../assets/pics/listings/laurel-20.webp";
import laurel21 from "../assets/pics/listings/laurel-21.webp";
import laurel22 from "../assets/pics/listings/laurel-22.webp";
import laurel23 from "../assets/pics/listings/laurel-23.webp";
import laurel24 from "../assets/pics/listings/laurel-24.webp";
import laurel25 from "../assets/pics/listings/laurel-25.webp";
import laurel26 from "../assets/pics/listings/laurel-26.webp";
import laurel27 from "../assets/pics/listings/laurel-27.webp";
// sangria images
import sangria1 from "../assets/pics/listings/sangria-1.webp";
import sangria2 from "../assets/pics/listings/sangria-1.webp";
import sangria3 from "../assets/pics/listings/sangria-1.webp";
import sangria4 from "../assets/pics/listings/sangria-1.webp";
import sangria5 from "../assets/pics/listings/sangria-1.webp";
import sangria6 from "../assets/pics/listings/sangria-1.webp";
import sangria7 from "../assets/pics/listings/sangria-1.webp";
import sangria8 from "../assets/pics/listings/sangria-1.webp";
import sangria9 from "../assets/pics/listings/sangria-1.webp";
import sangria10 from "../assets/pics/listings/sangria-1.webp";
import sangria11 from "../assets/pics/listings/sangria-1.webp";
import sangria12 from "../assets/pics/listings/sangria-1.webp";
import sangria13 from "../assets/pics/listings/sangria-1.webp";
import sangria14 from "../assets/pics/listings/sangria-1.webp";
import sangria15 from "../assets/pics/listings/sangria-1.webp";
import sangria16 from "../assets/pics/listings/sangria-1.webp";
import sangria17 from "../assets/pics/listings/sangria-1.webp";
import sangria18 from "../assets/pics/listings/sangria-1.webp";
import sangria19 from "../assets/pics/listings/sangria-1.webp";
import sangria20 from "../assets/pics/listings/sangria-1.webp";
import sangria21 from "../assets/pics/listings/sangria-1.webp";
import sangria22 from "../assets/pics/listings/sangria-1.webp";
import sangria23 from "../assets/pics/listings/sangria-1.webp";
import sangria24 from "../assets/pics/listings/sangria-1.webp";
import sangria25 from "../assets/pics/listings/sangria-1.webp";
import sangria26 from "../assets/pics/listings/sangria-1.webp";
import sangria27 from "../assets/pics/listings/sangria-1.webp";
import sangria28 from "../assets/pics/listings/sangria-1.webp";
import sangria29 from "../assets/pics/listings/sangria-1.webp";
import sangria30 from "../assets/pics/listings/sangria-1.webp";
import sangria31 from "../assets/pics/listings/sangria-1.webp";
import sangria32 from "../assets/pics/listings/sangria-1.webp";
import sangria33 from "../assets/pics/listings/sangria-1.webp";
import sangria34 from "../assets/pics/listings/sangria-1.webp";
import sangria35 from "../assets/pics/listings/sangria-1.webp";
import sangria36 from "../assets/pics/listings/sangria-1.webp";
import sangria37 from "../assets/pics/listings/sangria-1.webp";
import sangria38 from "../assets/pics/listings/sangria-1.webp";
import sangria39 from "../assets/pics/listings/sangria-1.webp";
import sangria40 from "../assets/pics/listings/sangria-1.webp";
import sangria41 from "../assets/pics/listings/sangria-1.webp";
import sangria42 from "../assets/pics/listings/sangria-1.webp";



const listings = [
    {
        name: 'Chancery',
        address: '7663 Chancery Gate, San Antonio, TX 78253',
        beds: 4,
        baths: 3,
        sqFt: 1529,
        type: 'Single Family Residence',
        built: 'Built in 2023',
        lot: '2,395.8 Square Feet Lot',
        gallery: chanceryGallery
    },
    {
        name: 'Sangria',
        address: '6733 Sangria Dawn, San Antonio, TX 78249',
        beds: 3,
        baths: 3,
        sqFt: 1762,
        type: 'Single Family Residence',
        built: 'Built in 2005',
        lot: '3,659.04 Square Feet Lot',
        gallery: sangriaGallery
    },
    {
        name: 'Hickory',
        address: '10127 HICKORY CRK, San Antonio, TX 78245',
        beds: 4,
        baths: 3,
        sqFt: 2743,
        type: 'Single Family Residence',
        built: 'Built in 2021',
        lot: '3,659.04 Square Feet Lot',
        gallery: hickoryGallery
    },
    {
        name: 'Laurel',
        address: '807 LAUREL RUN, San Antonio, TX 78219',
        beds: 3,
        baths: 2,
        sqFt: 1546,
        type: 'Single Family Residence',
        built: 'Built in 2021',
        lot: '9,060.48 Square Feet Lot',
        gallery: laurelGallery
    }
];



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
        {listings.map((listing, index) => (
            <>
            <h1 className="mb-2 text-spurs-charcoal">{listing.address}</h1>
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
            <div className="absolute z-40 bottom-3 right-3">
              <div className="bg-spurs-charcoal py-3 px-2 transition duration-300 ease-out hover:scale-105">
                <button className="cursor-pointer text-white ">see all {listing.gallery.length} photos</button>
              </div>
            </div>
            </div>
            </>
        ))}
      </div>
    </div>
    </>
}