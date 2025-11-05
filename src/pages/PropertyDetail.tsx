import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCarousel from '@/components/PropertyCarousel';
import PropertyImageGallery from '@/components/PropertyImageGallery';
import { getPropertyById } from '@/data/properties';
import { motion } from 'framer-motion';
import { Bed, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/featured-properties" replace />;
  }

  const property = getPropertyById(id);

  if (!property) {
    return <Navigate to="/featured-properties" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>

        {/* Full-Screen Hero Carousel */}
        <section className="relative h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <PropertyCarousel
              images={property.images}
              alt={property.title}
              fullScreen={true}
            />
          </motion.div>
        </section>



        {/* Property Information */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h1 className="heading-lg text-text-primary mb-4">
                    {property.title}
                  </h1>

                  <p className="text-body-lg text-text-secondary mb-6">
                    {property.address}
                  </p>

                  {/* Property Stats */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Bed className="w-5 h-5" />
                      <span className="text-body">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Bath className="w-5 h-5" />
                      <span className="text-body">{property.bathrooms} Bathrooms</span>
                    </div>
                  </div>

                  {/* Description */}
                  {property.description && (
                    <div className="mb-8">
                      <h2 className="heading-sm text-text-primary mb-4">
                        Description
                      </h2>
                      <p className="text-body text-text-secondary leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  )}

                  {/* Amenities Section */}
                  {property.amenities && property.amenities.length > 0 && (
                    <div className="mb-8">
                      <h2 className="heading-sm text-text-primary mb-6">
                        Amenities & Features
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {property.amenities.map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-body text-text-secondary">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar with Details */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="sticky top-24"
                >
                  <div className="card-elevated p-6">
                    <h3 className="heading-sm text-text-primary mb-6">
                      Property Details
                    </h3>

                    {property.details && property.details.length > 0 && (
                      <div className="space-y-4">
                        {property.details.map((detail, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-body text-text-secondary">
                              {detail.label}
                            </span>
                            <span className="text-body font-medium text-text-primary">
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <Link
                        to="/contact"
                        className="btn-primary w-full text-center block"
                      >
                        Schedule Viewing
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
       
        {/* Image Gallery Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PropertyImageGallery
                images={property.images}
                alt={property.title}
              />
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="heading-sm text-text-primary mb-6 text-center">
                Location & Neighborhood
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Map Placeholder */}
                <div className="lg:col-span-2">
                  <div className="bg-surface-elevated rounded-lg overflow-hidden shadow-sm h-96">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-text-secondary text-sm">
                          Interactive map will be displayed here
                        </p>
                        <p className="text-text-primary font-medium mt-2">
                          {property.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="lg:col-span-1">
                  <div className="bg-surface-elevated rounded-lg p-6 shadow-sm h-96 overflow-hidden">
                    <h3 className="heading-xs text-text-primary mb-4">
                      Nearby Landmarks
                    </h3>

                    <div className="space-y-4 overflow-y-auto max-h-80">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">IT Hub</p>
                          <p className="text-sm text-text-secondary truncate">2.5 km away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">Metro Station</p>
                          <p className="text-sm text-text-secondary truncate">1.2 km away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">Shopping Mall</p>
                          <p className="text-sm text-text-secondary truncate">800 m away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">International Airport</p>
                          <p className="text-sm text-text-secondary truncate">15 km away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">Hospital</p>
                          <p className="text-sm text-text-secondary truncate">1.8 km away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body font-medium text-text-primary truncate">Schools</p>
                          <p className="text-sm text-text-secondary truncate">500 m away</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;