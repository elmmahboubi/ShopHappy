import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductBySlug } from '../api/products';
import { ChevronLeft, ChevronRight, ShoppingCart, ChevronDown, ChevronUp, X, MapPin, Truck, DollarSign, RefreshCw } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  // Calculate delivery dates (5-8 days from today)
  const getDeliveryDates = () => {
    const today = new Date();
    const day1 = new Date(today);
    day1.setDate(today.getDate() + 5);
    const day2 = new Date(today);
    day2.setDate(today.getDate() + 8);
    
    const formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };

    return `${formatDate(day1)}-${formatDate(day2)}`;
  };
  
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        if (data) {
          setProduct(data);
          // Update page metadata
          document.title = `${data.title} - CameraHub`;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.description);
          }
          // Add Schema.org structured data
          const schemaData = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: data.title,
            description: data.description,
            image: data.images,
            brand: {
              '@type': 'Brand',
              name: data.brand
            },
            offers: {
              '@type': 'Offer',
              price: data.price,
              priceCurrency: 'USD',
              itemCondition: `https://schema.org/${data.condition === 'New' ? 'NewCondition' : 'UsedCondition'}`,
              availability: 'https://schema.org/InStock'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: data.rating,
              reviewCount: data.reviewCount
            }
          };
          
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.text = JSON.stringify(schemaData);
          document.head.appendChild(script);
          
          return () => {
            document.head.removeChild(script);
          };
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  useEffect(() => {
    if (showZoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showZoom]);

  // Memoize FAQ items to prevent unnecessary re-renders
  const faqItems = useMemo(() => [
    {
      question: "Are the items new or used?",
      answer: "We offer both new and second-hand items. Product condition is clearly listed in the description (e.g., Brand New, Like New, Refurbished, or Used – Good Condition)."
    },
    {
      question: "Do products come with a warranty?",
      answer: "New items typically include a manufacturer warranty. For second-hand items, we offer a 30-day ShopHappy Guarantee for returns and exchanges, unless otherwise stated."
    },
    {
      question: "Can I return a product if it doesn't meet my expectations?",
      answer: "Yes! We offer 30-day hassle-free returns. The item must be in the same condition as received. Read our Return Policy for more details."
    },
    {
      question: "How long does shipping take?",
      answer: "Most orders ship within 5–8 business days. Delivery times vary by location, but you can expect your item within 5–8 business days on average."
    },
    {
      question: "Is there free shipping?",
      answer: "Yes, we offer free standard shipping on orders over $50. Express options are also available at checkout."
    },
    {
      question: "Are your second-hand products tested?",
      answer: "Absolutely. All second-hand electronics go through a multi-point inspection and are fully functional unless otherwise stated."
    },
    {
      question: "Can I trust the product photos?",
      answer: "Yes — what you see is what you get. Our photos show the actual product (or a very close representation for new items). We do not use stock images for used items."
    },
    {
      question: "Is local pickup available?",
      answer: "Currently, we are an online-only store, but we're working on introducing local pickup options in select cities soon."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach us anytime at support@shophappy.us or call us at +1 (123) 456-7891. We're available 7 days a week."
    }
  ], []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/" className="text-[#0046be] hover:text-[#003494]">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { title, description, price, images, condition } = product;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery - Fixed */}
            <div className="relative lg:sticky lg:top-24 lg:self-start">
              <div 
                onClick={() => setShowZoom(true)}
                className="cursor-zoom-in relative group"
              >
                <img 
                  src={images[activeImage]} 
                  alt={`${title} - Image ${activeImage + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-lg"></div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex justify-center space-x-2 overflow-x-auto py-2">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      activeImage === idx ? 'ring-2 ring-[#0046be]' : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {activeImage === idx && (
                      <div className="absolute inset-0 bg-white/10"></div>
                    )}
                  </button>
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            
            {/* Product Info - Scrollable */}
            <div className="lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4 scrollbar-hide">
              <h1 className="text-3xl font-medium text-gray-900">{title}</h1>
              <div className="mt-2 text-gray-600">{condition}</div>
              <div className="mt-4 text-4xl font-bold text-gray-900">
                ${price.toLocaleString()}
              </div>
              
              {/* Shipping Information */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Ships from:</p>
                    <p className="text-sm text-gray-600">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Truck className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Order today to get by:</p>
                    <p className="text-sm text-gray-600">{getDeliveryDates()}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Cost to ship:</p>
                    <p className="text-sm text-gray-600">FREE</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-[#0046be] mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Returns:</p>
                    <p className="text-sm text-gray-600">Accepted</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600">{description}</p>
              </div>
              
              <div className="mt-8 space-y-4">
                <button className="w-full bg-[#0046be] hover:bg-[#003494] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12 border-t pt-8">
                <button
                  onClick={() => setShowFAQ(!showFAQ)}
                  className="w-full flex items-center justify-between text-left text-gray-900 hover:text-[#0046be] transition-colors duration-300"
                >
                  <span className="text-xl font-medium">Frequently Asked Questions</span>
                  {showFAQ ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {showFAQ && (
                  <div className="mt-6 space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                        <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Zoom Modal */}
      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowZoom(false)}
            className="absolute top-4 right-4 text-white hover:text-[#0046be] transition-colors duration-200"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[activeImage]}
              alt={`${title} - Image ${activeImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;