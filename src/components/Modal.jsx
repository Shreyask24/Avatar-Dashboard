
import React from 'react'
export default function Modal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-80 relative">
                <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full mb-3 p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    className="w-full mb-4"
                />
                <button className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
                    Save
                </button>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
