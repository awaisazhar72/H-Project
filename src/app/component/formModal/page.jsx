import React from "react";

const ModalForm = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-4 m-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <p>Filter</p>
        </div>
        <div className="flex p-2 m-1 gap-4">
          <button className="border border-gray-400 mt-1 w-20 py-1">
            Cancel
          </button>
          <button className="bg-blue-600 border border-gray-400 text-white py-1 px-4">
            Save
          </button>
        </div>
      </div>

      <form>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>
              <p>Number of Items</p>
              <input
                type="text"
                placeholder="Enter Number of items"
                className="border border-gray-400 rounded p-2 w-full max-w-xl"
              />
            </div>

            <div>
              <p>Minimum reviews</p>
              <input
                type="text"
                placeholder="Please Enter Minimum reviews"
                className="border border-gray-400 rounded p-2"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p>Max Price</p>
              <input
                type="text"
                placeholder="Please Enter Max Price"
                className="border border-gray-400 rounded p-2"
              />
            </div>

            <div>
              <p>Min Price</p>
              <input
                type="text"
                placeholder="Please Enter Min Price"
                className="border border-gray-400 rounded p-2"
              />
            </div>
          </div>

          <div>
            <p>Keywords</p>
            <input
              type="text"
              placeholder="Please Enter url description"
              className="border border-gray-400 rounded p-2 w-full h-[160px] max-w-xl"
            />
          </div>
          <div>
            <p>Keyword To Exclude</p>
            <input
              type="text"
              placeholder="Please Enter url description"
              className="border border-gray-400 rounded p-2 w-full h-[160px] max-w-xl"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalForm;
