import { useState } from "react";

function NameList({ initialNames }) {
  const [names, setNames] = useState(initialNames);

  const handleDelete = (index) => {
    const updatedNames = names.filter((d, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <div>
      <h2>รายชื่อ</h2>
      <ul>
        {names.map((item, index) => (
          <li key={index}>
            {item.name} อายุ {item.age} 
            <button className="bg-green-200" onClick={() => handleDelete(index)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const initialNames = [
    { name: "Xiaztv", age: 40 },
    { name: "Kiva", age: 26 },
  ];

  return <NameList initialNames={initialNames} />;
}

export default App;
