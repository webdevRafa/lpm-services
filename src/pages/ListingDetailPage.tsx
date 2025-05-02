import { useParams } from "react-router-dom";
import { listings } from "../data/listings";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const ListingDetailPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const navigate = useNavigate();

  const { slug } = useParams();

  const listing = listings.find(
    (item) => item.name.toLowerCase() === slug?.toLowerCase()
  );

  if (!listing) return <p className="text-center text-red-500">Listing not found</p>;

  return (
    <div className="px-4 py-10 max-w-[1200px] mx-auto mt-20">
        <button
  onClick={() => navigate("/listings")}
  className="my-6 px-4 py-2 bg-spurs-charcoal text-white hover:scale-105 transition duration-300 sticky top-22"
>
  ← Back to Listings
</button>
      <h1 className="text-2xl font-bold mb-4">{listing.address}</h1>
      <p>{listing.beds} beds | {listing.baths} baths | {listing.sqFt} sq. ft.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {listing.gallery.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`${listing.name} image ${i + 1}`}
            onClick={() => setSelectedImage(image)}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-spurs-charcoal bg-opacity-80 flex items-center justify-center w-full h-full"
    onClick={() => setSelectedImage(null)}
  >

    <img src={selectedImage} alt="Full View" className="max-w-[90%] max-h-[90%]" />
  </div>
)}
    </div>
  );
};
