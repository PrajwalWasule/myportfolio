const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="data:image/png;base64,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"  // Replace with the path to your logo
            alt="Wasuleeeeeeee Logo"
            className="h-16 w-16" // Adjust size of the logo
          />
          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-0">
            Wasuleeeeeeee
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center">
            <li>
              <a href="/" className="text-white text-lg md:text-2xl font-bold hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white text-lg md:text-2xl font-bold hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/meeting" className="text-white text-lg md:text-2xl font-bold hover:underline">
                Meeting
              </a>
            </li>
            <li>
              <a href="/signin" className="text-white text-lg md:text-2xl font-bold hover:underline">
                SignIn/SignUp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
