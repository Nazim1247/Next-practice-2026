const StoryCard = ({story}) => {
    return (
        <div className="max-w-sm rounded-xl bg-white p-6 shadow-lg mt-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
                {story.title}
            </h2>

            <p className="mb-4 text-gray-600">
                {story.description}
            </p>

            <button className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600">
                Read More
            </button>
        </div>
    );
};

export default StoryCard;