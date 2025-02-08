import { FaUsers, FaChartLine, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Users",
      value: "12,345",
      icon: <FaUsers size={28} />,
    },
    {
      title: "Total Sales",
      value: "$25,678",
      icon: <FaDollarSign size={28} />,
    },
    {
      title: "New Orders",
      value: "1,234",
      icon: <FaShoppingCart size={28} />,
    },
    {
      title: "Growth Rate",
      value: "8.5%",
      icon: <FaChartLine size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-200">{card.value}</p>
          </div>
          <div className="text-white">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
