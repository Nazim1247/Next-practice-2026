import React from 'react';

const StoryDetailsPage = async ({params}) => {
    const {id} = await params;
    const devStory = [
  {
    "id": 1,
    "title": "Learn React",
    "description": "React is a JavaScript library for building user interfaces."
  },
  {
    "id": 2,
    "title": "Learn Next.js",
    "description": "Next.js is a React framework for building modern web applications."
  },
  {
    "id": 3,
    "title": "Learn JavaScript",
    "description": "JavaScript helps you create interactive and dynamic websites."
  },
  {
    "id": 4,
    "title": "Learn Tailwind CSS",
    "description": "Tailwind CSS makes it easy to design beautiful user interfaces."
  },
  {
    "id": 5,
    "title": "Build a Website",
    "description": "You can combine React and Tailwind CSS to build modern websites."
  },
  {
    "id": 6,
    "title": "Practice Coding",
    "description": "Regular coding practice helps you improve your programming skills."
  }
]
const story =devStory.find((story) => story.id == id);
if(!story){
    return <h2>Story Not Found</h2>
}
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

export default StoryDetailsPage;