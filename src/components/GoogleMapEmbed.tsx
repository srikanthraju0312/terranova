interface GoogleMapEmbedProps {
  lat: number;
  lng: number;
  address: string;
  title: string;
}

const GoogleMapEmbed = ({ lat, lng, address, title }: GoogleMapEmbedProps) => {
  // Create Google Maps URL for opening in new tab
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  
  // Create embedded map URL
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed&z=15`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden shadow-sm cursor-pointer group"
      onClick={handleMapClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleMapClick();
        }
      }}
      aria-label={`Open ${title} location in Google Maps`}
    >
      {/* Embedded Google Map */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${title}`}
        className="pointer-events-none"
      />
      
      {/* Overlay with hover effect and click instruction */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-sm font-medium text-text-primary">
              Click to open in Google Maps
            </span>
            <svg 
              className="w-4 h-4 text-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Address label at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
        <p className="text-white text-sm font-medium truncate">
          {address}
        </p>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;

