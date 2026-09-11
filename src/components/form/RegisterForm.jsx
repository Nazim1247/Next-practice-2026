"use client";

import { postUser } from "@/actions/server/auth";
import React, { useState } from "react";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
        contactNo: "",
        bloodGroup: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       const result= await postUser(formData);
       alert(result.message)
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-6 border rounded-xl shadow">
            <h2 className="text-3xl font-bold text-center mb-6">
                Register
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-1 font-medium">
                        Image URL
                    </label>

                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {/* Contact No */}
                <div>
                    <label className="block mb-1 font-medium">
                        Contact No
                    </label>

                    <input
                        type="tel"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="block mb-1 font-medium">
                        Blood Group
                    </label>

                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
                >
                    Register
                </button>

            </form>
        </div>
    );
};

export default RegisterForm;