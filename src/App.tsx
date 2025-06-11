import React, { useState } from 'react';
import { MapPin, Phone, Clock, ShoppingBag, Coffee, Sandwich, Battery, Car, Menu, X, Star, Quote, Tag, Calendar } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imagePopup, setImagePopup] = useState<{ isOpen: boolean; images: string[]; title: string }>({
    isOpen: false,
    images: [],
    title: ''
  });

  const openDirections = () => {
    window.open('https://maps.google.com?q=4326+Friendswood+Link+Rd,+Friendswood,+TX+77546', '_blank');
  };

  const openImagePopup = (images: string[], title: string) => {
    setImagePopup({ isOpen: true, images, title });
  };

  const closeImagePopup = () => {
    setImagePopup({ isOpen: false, images: [], title: '' });
  };

  // Sample images for each section (you can replace these with uploaded images)
  const productImages = {
    groceries: [
      "https://ugc.same-assets.com/3JBFH_UXiTUUsiGVPSv5ANqqfHoxTESh.jpeg",
      "https://ugc.same-assets.com/RNh860c8Cvu1AaVClBkfIXDkdWFnZ2s9.jpeg"
    ],
    snacks: [
      "https://ugc.same-assets.com/QOiz6eYyAT7OEk63PTRXBrDc6_prNrH-.jpeg",
      "https://ugc.same-assets.com/_9zN5M1uEEjb5Z05Z5YMwD9CkRo3fkgZ.jpeg"
    ],
    checkout: [
      "https://ugc.same-assets.com/GbaF-H7agAYTfXfUWmlE6I7cpJQ9GOhE.jpeg",
      "https://ugc.same-assets.com/xu853-Y9C1fa2rtPOAcS_Kwid0Ca6utP.jpeg"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-teal-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">EZ Food Mart</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Services</a>
              <a href="#promotions" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Promotions</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Reviews</a>
              <a href="#store-info" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Store Info</a>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#promotions"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Promotions
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#store-info"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Store Info
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to <span className="text-cyan-200">EZ Food Mart</span>
              </h2>
              <p className="text-xl mb-8 text-teal-100">
                Your friendly neighborhood convenience store in Friendswood, TX.
                We provide everyday essentials, fresh snacks, and more for our community -
                all with a smile and unbeatable prices!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openDirections}
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center justify-center"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </button>
                <a href="tel:2819960848" className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ugc.same-assets.com/IgarCQHBBVKgfOagKRU8RMVOUs1q2n85.jpeg"
                alt="Modern convenience store interior with well-organized shelves"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About EZ Food Mart</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Friendswood, EZ Food Mart has been serving our community
              with quality products and friendly service. We're your go-to destination for
              everyday needs, quick snacks, and convenience items.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Extended Hours</h4>
              <p className="text-gray-600">Open daily with convenient hours to serve you</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Products</h4>
              <p className="text-gray-600">Fresh snacks, beverages, and everyday essentials at great prices</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Prime Location</h4>
              <p className="text-gray-600">Easy to find on Friendswood Link Road with ample parking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-600">Everything you need for convenience and comfort</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-400">
              <Coffee className="h-12 w-12 text-teal-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Beverages</h4>
              <p className="text-gray-600">Coffee, sodas, energy drinks, water, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-emerald-400">
              <Sandwich className="h-12 w-12 text-emerald-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Snacks & Food</h4>
              <p className="text-gray-600">Fresh sandwiches, chips, candy, and quick meals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-cyan-400">
              <Car className="h-12 w-12 text-cyan-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Automotive</h4>
              <p className="text-gray-600">Basic car supplies and travel necessities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-500">
              <Battery className="h-12 w-12 text-teal-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Everyday Items</h4>
              <p className="text-gray-600">Phone chargers, toiletries, and daily essentials</p>
            </div>
          </div>

          {/* Product Images with Popup */}
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImagePopup(productImages.groceries, "Fresh Groceries")}
            >
              <img
                src="https://ugc.same-assets.com/3JBFH_UXiTUUsiGVPSv5ANqqfHoxTESh.jpeg"
                alt="Well-stocked grocery store shelves with various products"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Fresh Groceries</h4>
                <p className="text-sm">Click to view gallery</p>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImagePopup(productImages.snacks, "Snacks & Drinks")}
            >
              <img
                src="https://ugc.same-assets.com/QOiz6eYyAT7OEk63PTRXBrDc6_prNrH-.jpeg"
                alt="Convenience store snack and beverage section"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Snacks & Drinks</h4>
                <p className="text-sm">Click to view gallery</p>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImagePopup(productImages.checkout, "Quick Checkout")}
            >
              <img
                src="https://ugc.same-assets.com/GbaF-H7agAYTfXfUWmlE6I7cpJQ9GOhE.jpeg"
                alt="Convenience store checkout area with various products"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Quick Checkout</h4>
                <p className="text-sm">Click to view gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Promotions Section */}
      <section id="promotions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">This Month's Promotions</h3>
            <p className="text-lg text-gray-600">Don't miss out on our amazing deals and special offers!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <Tag className="h-8 w-8 text-teal-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Buy 2 Get 1 Free</h4>
              </div>
              <p className="text-gray-700 mb-3">Energy drinks and sports beverages</p>
              <p className="text-sm text-teal-600 font-medium">Valid through end of month</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-emerald-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Happy Hour</h4>
              </div>
              <p className="text-gray-700 mb-3">50% off fresh coffee 3-5 PM daily</p>
              <p className="text-sm text-emerald-600 font-medium">Every weekday</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-cyan-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Combo Deal</h4>
              </div>
              <p className="text-gray-700 mb-3">Sandwich + drink + chips for $7.99</p>
              <p className="text-sm text-cyan-600 font-medium">All day special</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-lg text-gray-600">Don't just take our word for it - hear from our satisfied customers!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-teal-400">
              <div className="flex items-center mb-4">
                <div className="flex text-teal-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-1-${i}`} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-teal-400 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "EZ Food Mart is my go-to spot for everything! The staff is always friendly,
                and they have the best prices in the area. Love the convenience!"
              </p>
              <div className="font-semibold text-gray-900">- Sarah M.</div>
              <div className="text-sm text-gray-600">Friendswood Resident</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-400">
              <div className="flex items-center mb-4">
                <div className="flex text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-2-${i}`} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-emerald-400 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Great selection and always clean! I stop by every morning for my coffee
                and they remember exactly how I like it. Excellent customer service!"
              </p>
              <div className="font-semibold text-gray-900">- Michael R.</div>
              <div className="text-sm text-gray-600">Regular Customer</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-400">
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-3-${i}`} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="h-8 w-8 text-cyan-400 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Perfect location and hours! Whether it's early morning or late evening,
                they're always open when I need them. A true neighborhood gem!"
              </p>
              <div className="font-semibold text-gray-900">- Jennifer L.</div>
              <div className="text-sm text-gray-600">Local Mom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section id="store-info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Store</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">4326 Friendswood Link Rd<br />Friendswood, TX 77546</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:2819960848" className="text-teal-600 hover:underline">(281) 996-0848</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Store Hours</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday: 6:00 AM - 11:00 PM</p>
                      <p>Tuesday: 6:00 AM - 11:00 PM</p>
                      <p>Wednesday: 6:00 AM - 11:00 PM</p>
                      <p>Thursday: 6:00 AM - 11:00 PM</p>
                      <p>Friday: 6:00 AM - 12:00 AM</p>
                      <p>Saturday: 6:00 AM - 12:00 AM</p>
                      <p>Sunday: 7:00 AM - 11:00 PM</p>
                      <p className="text-sm mt-2 text-gray-500">*Hours may vary on holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">Easy to Find</h4>
              <div className="mb-6">
                <img
                  src="https://ugc.same-assets.com/xu853-Y9C1fa2rtPOAcS_Kwid0Ca6utP.jpeg"
                  alt="Modern convenience store exterior"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-gray-600 mb-6">
                Located on Friendswood Link Road, we're easily accessible with ample parking available.
                Look for our bright, welcoming storefront!
              </p>
              <button
                onClick={openDirections}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-teal-400 mr-2" />
                <h4 className="text-xl font-bold">EZ Food Mart</h4>
              </div>
              <p className="text-gray-400">
                Your neighborhood convenience store in Friendswood, Texas.
                Serving the community with quality products and friendly service since day one.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>4326 Friendswood Link Rd</p>
                <p>Friendswood, TX 77546</p>
                <p>(281) 996-0848</p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Store Hours</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mon-Thu: 6:00 AM - 11:00 PM</p>
                <p>Fri-Sat: 6:00 AM - 12:00 AM</p>
                <p>Sunday: 7:00 AM - 11:00 PM</p>
                <p className="text-xs mt-2">*Hours may vary on holidays</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EZ Food Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Popup Modal */}
      {imagePopup.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeImagePopup}>
          <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{imagePopup.title}</h3>
              <button
                onClick={closeImagePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {imagePopup.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${imagePopup.title} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
