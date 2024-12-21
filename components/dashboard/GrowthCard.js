import NumberFlow from "@number-flow/react";
import { ChartBar } from "lucide-react";
import { TrendingUp } from "lucide-react";
import React from "react";

export default function GrowthCard() {
  return (
    <div className="grid gap-4 grid-cols-1 ">
      <div className="bg-purple-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Occupancy Rate
          </h3>
          <ChartBar className="h-8 w-8 text-purple-400" />
        </div>
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <NumberFlow
              value={85}
              format={{ useGrouping: false }}
              aria-hidden="true"
              animated="true"
              className="pointer-events-none"
              willChange
            />
            <span className="text-lg ml-1">%</span>
          </div>
          <span className="ml-2 text-sm text-green-500">↑ 12%</span>
        </div>
        <div className="mt-2 h-2 bg-purple-200 rounded-full">
          <div
            className="h-2 bg-purple-500 rounded-full"
            style={{ width: "85%" }}
          />
        </div>
      </div>
      {/* Monthly Growth Card */}
      <div className="bg-rose-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Monthly Growth
          </h3>
          <TrendingUp className="h-8 w-8 text-rose-400" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <NumberFlow
              value={23}
              format={{ useGrouping: false }}
              aria-hidden="true"
              animated="true"
              className="pointer-events-none"
              willChange
            />
            <span className="text-lg ml-1">%</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-green-500">↑ 5.2%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {[30, 45, 28, 65, 45, 55, 70].map((height, i) => (
            <div key={i} className="h-10 flex items-end">
              <div
                className="w-full bg-rose-400 rounded-sm"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Yearly Growth Card */}
      <div className="bg-sky-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Yearly Growth
          </h3>
          <TrendingUp className="h-8 w-8 text-sky-400" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <NumberFlow
              value={13}
              format={{ useGrouping: false }}
              aria-hidden="true"
              animated="true"
              className="pointer-events-none"
              willChange
            />
            <span className="text-lg ml-1">%</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-green-500">↑ 3.2%</span>
            <span className="text-gray-500">vs last year</span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {[30, 45, 28, 65, 45, 55, 70].map((height, i) => (
            <div key={i} className="h-10 flex items-end">
              <div
                className="w-full bg-sky-400 rounded-sm"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
