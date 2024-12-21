"use client";

import { useToast } from "../toast/ToastContext";

export default function AddPropertyForm({ onSubmit }) {
  const { addToast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      type: formData.get("type"),
      status: formData.get("status"),
      address: formData.get("address"),
      price: formData.get("price"),
    };
    onSubmit(data);
    addToast("success", "Property added successfully");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Property Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
          placeholder="Enter property name"
        />
      </div>

      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Type
        </label>
        <select
          id="type"
          name="type"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
        >
          <option value="">Select type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
        >
          <option value="">Select status</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
          placeholder="Enter property address"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
          placeholder="Enter property price"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
        >
          Add Property
        </button>
      </div>
    </form>
  );
}
