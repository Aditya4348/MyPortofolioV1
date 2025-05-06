import React from "react";

const QuoteCard = ({ quote, author, image }) => {
  return (
    <div className="relative bg-white/5 border border-blue-900/30 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 gap-4 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-lg md:max-w-2xl backdrop-blur-md text-center sm:text-left">
      {/* Icon tanda kutip kiri atas */}
      <div className="absolute top-3 left-4 text-blue-500 text-3xl sm:text-4xl">
        &ldquo;
      </div>

      {image && (
        <img
          src={image}
          alt="Quote Illustration"
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
        />
      )}
      <div className="flex flex-col items-center sm:items-start justify-center">
        <p className="text-base sm:text-xl italic text-white mb-2 sm:mb-4">&ldquo;{quote}&rdquo;</p>
        <h2 className="text-sm sm:text-lg font-semibold text-blue-300">- {author}</h2>
      </div>
    </div>
  );
};

export default QuoteCard;