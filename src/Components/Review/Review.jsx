import React from "react";

const reviews = [
  {
    name: "John Doe",
    date: "February 15, 2025",
    rating: 5,
    review:
      "Great platform to find the perfect match! The interface is user-friendly, and the profiles are accurate.",
  },
  {
    name: "Sara Smith",
    date: "January 12, 2025",
    rating: 4,
    review:
      "Very helpful! I met some amazing people here. Could use a few more advanced filters, but overall a great experience.",
  },
  {
    name: "Raj Patel",
    date: "December 30, 2024",
    rating: 5,
    review:
      "I found my soulmate on this site! Easy to use, and I love the match suggestions.",
  },
];

const Review = () => {
  return (
    <div className=" text-white py-8">
      <h1 className="heading">Review</h1>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden text-white border border-gray-400"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold">
                    {review.name[0]}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-300">{review.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{review.review}</p>
            </div>
            <div className="px-6 pb-4">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-3.09 1.63.59-3.45L4 8.87l3.49-.28L10 5l1.51 3.59L15 8.87l-3.5 4.31.58 3.45L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
