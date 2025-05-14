import React from "react";
export default function AvatarCard({ user }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition transform hover:scale-105">
            <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 text-center font-semibold text-lg">
                {user.firstName} {user.lastName}
            </h3>
            <button className="block mx-auto mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                Edit
            </button>
        </div>
    );
}
