import React from "react"

type GalleryImage = {
  src: string
  alt: string
}

export default function GallerySection() {
  const gallery = {
    leftLarge: {
      src: "/movers1.jpg",
      alt: "Professional moving truck in Nairobi",
    },
    rightLarge: {
      src: "movers2.jpg",
      alt: "Professional moving truck in Nairobi",  
    },
    gridOne: [
      {
        src: "movers5.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers6.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers3.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers4.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      
    ] as GalleryImage[],
    gridTwo: [
      {
        src: "movers5.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers6.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers3.jpg",
        alt: "Professional moving truck in Nairobi",
      },
      {
        src: "movers4.jpg",
        alt: "Professional moving truck in Nairobi",
      },
    
    ] as GalleryImage[],
  }

  return (
    <section className="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold ">
            
              Explore our  Gallery
            
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our gallery to learn more about our amazing products and their
            features.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 rounded-lg">
          {/* Left Large Image */}
          <GalleryImageCard image={gallery.leftLarge} large  />

          {/* Grid One */}
          <div className="grid grid-cols-2 gap-6 rounded-lg">
            {gallery.gridOne.map((image, idx) => (
              <GalleryImageCard key={idx} image={image} />
            ))}
          </div>

          {/* Grid Two */}
          <div className="grid grid-cols-2 gap-6 rounded-lg">
            {gallery.gridTwo.map((image, idx) => (
              <GalleryImageCard key={idx} image={image} />
            ))}
          </div>

          {/* Right Large Image */}
          <GalleryImageCard image={gallery.rightLarge} large />
        </div>
      </div>
    </section>
  )
}

function GalleryImageCard({
  image,
  large = false,
}: {
  image: GalleryImage
  large?: boolean
}) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={`rounded-lg object-cover w-full ${
        large ? "aspect-[5/4] min-h-[30rem]" : "aspect-[5/4] min-h-[14rem]"
      }`}
      loading="lazy"
    />
  )
}
