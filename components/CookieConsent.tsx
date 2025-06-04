import React from 'react';

const CookieConsent = () => {
  const handleClick = () => {
    alert(
      'Unsere Website verwendet keine Cookies. Ihre Daten bleiben geschützt.'
    );
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 max-w-xl w-full z-50 text-center">
      <p className="text-gray-800 dark:text-gray-200 mb-3">
        Unsere Website verwendet keine Cookies.
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Info
      </button>
    </div>
  );
};

export default CookieConsent;
