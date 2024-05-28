"use client";
import React, { useState } from "react";
import ModalForm from "../formModal/page";

const ProductHunter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed w-2/3 top-24 ml-[22%] h-[80vh] bg-white rounded-lg shadow-lg">
      <div className="mt-12">
        <div className="text-left pl-6">
          <p className="font-bold">
            Oppo A54 5G 6.5 inches Smartphone, 4/64GB, Fluid Black
          </p>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </div>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="mt-5">
        <div className="text-left pl-6">
          <p className="font-bold">
            Oppo A54 5G 6.5 inches Smartphone, 4/64GB, Fluid Black
          </p>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </div>
      </div>
      <hr className="mt-12 mb-5" />
      <div className="mt-10">
        <div className="text-left pl-6">
          <p className="font-bold">
            Oppo A54 5G 6.5 inches Smartphone, 4/64GB, Fluid Black
          </p>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </div>
      </div>
      <div className="pl-4 absolute bottom-4 left-4">
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 border border-gray-400 text-white px-4 py-2"
        >
          Open
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-3xl bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleCloseModal}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ModalForm />
        </div>
      )}
    </div>
  );
};

export default ProductHunter;
