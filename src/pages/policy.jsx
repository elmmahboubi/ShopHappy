import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Policies</h1>
            
            {/* Return Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Policy</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're here to help.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Return Window</h3>
                <p>
                  You have 30 days from the date of delivery to return your item. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Return Process</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Contact our customer service team to initiate a return.</li>
                  <li>Pack the item securely in its original packaging.</li>
                  <li>Include the return form that was provided with your order.</li>
                  <li>Ship the item to the address provided by our customer service team.</li>
                </ol>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Refunds</h3>
                <p>
                  Once we receive and inspect your return, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                </p>
                <p>
                  If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Exceptions</h3>
                <p>
                  Some items are non-returnable for hygiene reasons or due to their nature. These include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Memory cards</li>
                  <li>Software products with a broken seal</li>
                  <li>Personalized items</li>
                  <li>Special order items</li>
                </ul>
              </div>
            </section>
            
            {/* Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  At CameraHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Register for an account</li>
                  <li>Make a purchase</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact our customer service</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">How We Use Your Information</h3>
                <p>
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders, products, and services</li>
                  <li>Send you marketing communications</li>
                  <li>Improve our website and customer service</li>
                  <li>Comply with legal obligations</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Cookies</h3>
                <p>
                  We use cookies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies, but this may prevent some parts of our website from functioning properly.
                </p>
              </div>
            </section>
            
            {/* Terms of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on CameraHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Disclaimer</h3>
                <p>
                  The materials on CameraHub's website are provided on an 'as is' basis. CameraHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Limitations</h3>
                <p>
                  In no event shall CameraHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CameraHub's website, even if CameraHub or a CameraHub authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;