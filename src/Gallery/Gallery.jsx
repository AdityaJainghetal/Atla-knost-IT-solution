import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://atla-knots-solution-admin-2.onrender.com/api/gallery",
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error("Invalid API response format");
        }

        // Extract all image URLs from the nested "images" arrays
        const allImageUrls = result.data
          .flatMap((item) => item.images || []) // get images array or empty
          .filter((url) => typeof url === "string" && url.trim() !== ""); // keep only valid strings

        setImages(allImageUrls);
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError(err.message || "Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Fallback images (your original ones)

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">Loading gallery...</p>
      </div>
    );
  }

  const displayImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 md:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 text-center mb-10 md:mb-16 tracking-tight">
        My Photo Gallery
      </h1>

      {error && (
        <p className="text-center text-red-400 mb-8">
          {error} — showing fallback images instead
        </p>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-300"
            >
              <img
                src={
                  src.startsWith("http")
                    ? `${src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
                    : `https://atla-knots-solution-admin-2.onrender.com${src}?auto=format&fit=crop&w=800&q=80`
                }
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = fallbackImages[index % fallbackImages.length];
                  e.target.alt = "Fallback image";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm p-4 font-medium">
                  Image {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
