import FeedbackForm from '@/components/form/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-4'>Add Feedback</h2>
            <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default AddFeedback;