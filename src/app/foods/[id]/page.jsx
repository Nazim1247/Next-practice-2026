import React from "react";

const getSingleFood = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );

    const data = await res.json();
    return data.details;
};

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold text-red-500">
                    Food Not Found
                </h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="overflow-hidden rounded-3xl bg-gray-500 shadow-xl">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Image */}
                    <div>
                        <img
                            src={food.foodImg}
                            alt={food.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-600">
                            {food.category}
                        </span>

                        <h1 className="mt-4 text-4xl font-bold text-gray-800">
                            {food.title}
                        </h1>

                        <div className="mt-6 space-y-4">
                            <p className="text-lg">
                                <span className="font-semibold">
                                    Price:
                                </span>{" "}
                                <span className="text-orange-500">
                                    ৳{food.price}
                                </span>
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">
                                    Area:
                                </span>{" "}
                                {food.area}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">
                                    Category:
                                </span>{" "}
                                {food.category}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-4">
                            <button className="rounded-lg bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
                                Order Now
                            </button>

                            <a
                                href={food.video}
                                target="_blank"
                                className="rounded-lg border border-orange-500 px-6 py-3 text-orange-500 hover:bg-orange-50"
                            >
                                Watch Video
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;