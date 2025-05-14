import { useState } from 'react';
import Header from './components/Header';
import AvatarList from './components/AvatarList';
import Modal from './components/Modal';

import React from 'react'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-5xl p-4">
        <AvatarList />
      </div>

      {/* Floating Button */}
      <button
        className="fixed bottom-6 hover:cursor-pointer right-6s bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsModalOpen(true)}
      >
        Create New Avatar
      </button>

      {/* Modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
