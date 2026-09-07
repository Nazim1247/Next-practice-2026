import React from "react";
// import { format } from "date-fns";

const FeedbackCard = ({ feedback }) => {
    const { _id, message, date } = feedback;

    return (
        <div className="border rounded-xl p-5 shadow-sm bg-gray-500 flex justify-between">
            {/* Message */}
            <p className="text-lg mb-4">
                {message}
            </p>

            {/* Date */}
            {/* <p className="text-sm text-gray-500 mb-5">
                {format(new Date(date), "dd MMM yyyy, hh:mm a")}
            </p> */}

            {/* Buttons */}
            <div className="flex gap-3">
                <button
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                    Update
                </button>

                <button
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;