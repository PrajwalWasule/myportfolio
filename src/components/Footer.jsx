const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center md:text-left">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Section */}
           
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <ul className="space-y-2">
                <li>Phone: <a href="tel:+1234567890" className="hover:underline">8600409709</a></li>
                <li>Email: <a href="mailto:info@rajasbuilder.com" className="hover:underline">info@rajasbuilder.com</a></li>
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">Follow Us</h2>
              <ul className="flex space-x-4 justify-center md:justify-start">
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-500"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-pink-500"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-300"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-6 text-sm text-gray-300">
            © 2024 Rajas Builder. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  