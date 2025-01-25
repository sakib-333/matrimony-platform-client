import React from "react";

const StoryCard = ({ story }) => {
  const formatdate = (date) => {
    const formattedDate = date.split("T")[0];
    return formattedDate;
  };

  return (
    <div className="max-w-md w-full p-4 border rounded">
      <img
        className="w-full max-h-[200px] object-cover"
        src={story.coupleImageLink}
      />
      <div className="flex justify-between mt-4">
        <p>Marriage: {formatdate(story.marriageDate)}</p>
        <p>Review Star: {story.rating}</p>
      </div>
      <p className="paragraph text-justify">{story.successStoryReview}</p>
    </div>
  );
};

export default StoryCard;
