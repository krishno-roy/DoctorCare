import React from "react";

const SucessList = [
  {
    id: 1,
    sucessclient: 3500,
    title: "Pacientes atendidos",
  },
  {
    id: 2,
    sucessclient: 15,
    title: "Especialistas disponíveis",
  },
  {
    id: 3,
    sucessclient: 10,
    title: "Anos no mercado",
  },
];

const Sucess = () => {
  return (
    <div className="container mx-auto px-4 z-50">
      <div className="flex flex-col sm:flex-row justify-between py-9 px-6 bg-[#fffaf1] rounded-lg shadow-md text-center">
        {SucessList.map((item, index) => (
          <div
            key={item.id}
            className={`flex-1 px-4 ${
              index !== SucessList.length - 1 ? "border-r-2 border-red-600" : ""
            }`}
          >
            <h2 className="text-4xl font-bold text-black mb-2">
              +{item.sucessclient}
            </h2>
            <p className="text-[#00856f] font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sucess;
