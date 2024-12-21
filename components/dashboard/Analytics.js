import NumberFlow from "@number-flow/react";
import { Building2 } from "lucide-react";
import { Home } from "lucide-react";
import { LogOut } from "lucide-react";
import { Key } from "lucide-react";
import React from "react";

export default function Analytics({ stats }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Check-ins
          </h3>
          <Key className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-2xl font-bold">
          <NumberFlow
            value={stats.checkIns}
            format={{ useGrouping: false }}
            aria-hidden="true"
            animated="true"
            className="pointer-events-none"
            willChange
          />
        </div>
      </div>

      <div className="bg-lime-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Check-outs
          </h3>
          <LogOut className="h-8 w-8 text-lime-400" />
        </div>
        <div className="text-2xl font-bold">
          <NumberFlow
            value={stats.checkOuts}
            format={{ useGrouping: false }}
            aria-hidden="true"
            animated="true"
            className="pointer-events-none"
            willChange
          />
        </div>
      </div>

      <div className="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Total Properties
          </h3>
          <Building2 className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-2xl font-bold">
          <NumberFlow
            value={stats.totalProperties}
            format={{ useGrouping: false }}
            aria-hidden="true"
            animated="true"
            className="pointer-events-none"
            willChange
          />
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Revenue
          </h3>
          <Home className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-2xl font-bold">
          ${" "}
          <NumberFlow
            value={stats.totalRevenue}
            format={{ useGrouping: false }}
            aria-hidden="true"
            animated="true"
            className="pointer-events-none"
            willChange
          />
        </div>
      </div>
    </div>
  );
}
