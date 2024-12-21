"use client";

import { AddPropertyForm } from "@/components/AddPropertyForm";
import Analytics from "@/components/Analytics";
import ChartSection from "@/components/ChartSection";
import GrowthCard from "@/components/GrowthCard";
import ActivitySection from "@/components/NewActivity";
import { PropertyList } from "@/components/PropertyList";
import NumberFlow from "@number-flow/react";
import { TrendingUp } from "lucide-react";
import { ChartBar } from "lucide-react";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [properties, setProperties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedProperties = localStorage.getItem("properties");
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    }
  }, []);

  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Math.random().toString(36).substr(2, 9),
    };
    const updatedProperties = [...properties, newProperty];
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
    setIsModalOpen(false);
  };

  const stats = {
    checkIns: properties.filter((p) => p.status === "Rented").length,
    checkOuts: properties.filter((p) => p.status === "Available").length,
    totalProperties: properties.length,
    totalRevenue: properties
      .filter((p) => p.status === "Rented")
      .reduce((acc, curr) => acc + Number(curr.price), 0),
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Analytics stats={stats} />

      {/* New Chart Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3 h-full hidden md:block">
          <ChartSection />
        </div>
        <div className="lg:col-span-2 h-full">
          <ActivitySection />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3">
        <div className="lg:col-span-2 col-span-3 h-full">
          <PropertyList
            properties={properties}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <div className="lg:col-span-1 col-span-3 h-full">
          <GrowthCard />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Property</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <AddPropertyForm onSubmit={addProperty} />
          </div>
        </div>
      )}
    </div>
  );
}
