import { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { app } from "../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Slideshow: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Initialize firebase storage
  const storage = getStorage(app);
  const storageRef = ref(storage, "slideshow-photos/");

  // fetch the images from firebase storage
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return `${url}?w=1280&h=384&crop=fill`; // Resize dynamically
          })
        );
        setImages(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Handle manual navigation
  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative w-full mx-auto h-96 overflow-hidden bg-gradient-to-t from-cyan-950 to-cyan-700 rounded-lg">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait" // Ensures only one image transitions at a time
          >
            {images.length > 0 && (
              <motion.img
                key={currentIndex} // Ensures unique keys for Framer Motion
                src={images[currentIndex]}
                alt="Slideshow"
                className="absolute w-full h-96 object-cover rounded-lg shadow-md"
                initial={{
                  x: direction === "right" ? "100%" : "-100%",
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: direction === "right" ? "-100%" : "100%",
                  opacity: 0,
                }}
                transition={{
                  type: "tween",
                  duration: 0.35,
                  ease: "easeInOut",
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="absolute h-full bg-slate-900-50 top-0 left-2 flex items-center ">
          <MdOutlineNavigateBefore
            onClick={prevSlide}
            className="text-white size-10 hover:size-14 transition-all duration-300 bg-slate-700 rounded-mds"
          />
        </div>
        <div className="absolute h-full bg-slate-900-50 top-0 right-2 flex items-center ">
          <MdOutlineNavigateNext
            onClick={nextSlide}
            className="text-white size-10 hover:size-14 transition-all duration-300 bg-slate-700 rounded-md"
          />
        </div>
      </div>
    </>
  );
};
