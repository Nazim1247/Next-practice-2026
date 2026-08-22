import StoryCard from '@/components/StoryCard';
import Title from '@/components/Title';
import React from 'react';

const StoresPage = () => {
    const devStores = [
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
    
    return (
        <div>
            <Title>This is stores</Title>
            <div className='mt-4'>
                {
                    devStores.map((story)=>(
                        <StoryCard key={story.id} story={story}></StoryCard>
                    ))
                }
            </div>
        </div>
    );
};

export default StoresPage;