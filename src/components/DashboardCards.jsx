import { FaUsers, FaChartLine, FaShoppingCart, FaDollarSign, FaMoneyBillWave } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    { title: "Total Sales", value: "$34,343.00", icon: <FaDollarSign size={28} /> },
    { title: "Revenue", value: "$4.5k", icon: <FaMoneyBillWave size={28} /> },
    { title: "Expenses", value: "$2.8k", icon: <FaShoppingCart size={28} /> },
    { title: "Profit", value: "$2.25k", icon: <FaChartLine size={28} /> },
    { title: "Loss", value: "$1.7k", icon: <FaUsers size={28} /> },
  ];

  return (
    <div className="glass p-6 bg-gray-900 min-h-screen">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-white mb-6">Sales Distribution</h2>

      {/* Gradient Background */}
      <div className="relative p-8 rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 shadow-lg">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform cursor-pointer hover:scale-105"
            >
              <h3 className="text-md font-medium text-white">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-100">{card.value}</p>
              <div className="text-white self-end">{card.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;