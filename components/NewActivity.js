// Add this component after your chart section
import { Loader } from "lucide-react";
import { PenTool } from "lucide-react";
import { FileText, DollarSign, Calendar } from "lucide-react";

const ActivitySection = () => {
  const activities = [
    {
      id: 1,
      type: "lease_signed",
      property: "Sunset Apartments 204",
      user: "John Carter",
      amount: "$2,400",
      timestamp: "2 hours ago",
      status: "completed",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      type: "payment_received",
      property: "Downtown Loft 501",
      user: "Sarah Miller",
      amount: "$1,850",
      timestamp: "5 hours ago",
      status: "processing",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      type: "maintenance_request",
      property: "Harbor View 302",
      user: "Mike Johnson",
      timestamp: "1 day ago",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      type: "viewing_scheduled",
      property: "Park Avenue 105",
      user: "Emma Wilson",
      timestamp: "2 days ago",
      status: "upcoming",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "lease_signed":
        return <FileText className="h-4 w-4 text-green-500" />;
      case "payment_received":
        return <DollarSign className="h-4 w-4 text-blue-500" />;
      case "maintenance_request":
        return <Loader className="h-4 w-4 text-orange-500" />;
      case "viewing_scheduled":
        return <Calendar className="h-4 w-4 text-purple-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      completed: "bg-green-100 text-green-800",
      processing: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
      upcoming: "bg-purple-100 text-purple-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-full w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <button className="text-sm text-blue-500 hover:text-blue-600">
          View all
        </button>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-10 h-10 rounded-full"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {activity.user}
                </p>
                <div className="flex items-center space-x-2">
                  {getActivityIcon(activity.type)}
                  {getStatusBadge(activity.status)}
                </div>
              </div>

              <p className="text-sm text-gray-500 truncate">
                {activity.property}
              </p>

              <div className="flex items-center mt-1">
                {activity.amount && (
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 mr-2">
                    {activity.amount}
                  </span>
                )}
                <span className="text-xs text-gray-500">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
