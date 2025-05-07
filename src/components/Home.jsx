import React from "react";
import Nav from "./Nav.jsx";
import { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("กรุณากรอกชื่อของคุณ");
      return;
    } else if (password === "") {
      alert("กรุณากรอกรหัสผ่านของคุณ");
      return;
    } else if (email === "") {
      alert("กรุณากรอกอีเมลของคุณ");
      return;
    }

    setSubmittedName(name);
    setSubmittedPassword(password);
    setSubmittedEmail(email);
    console.log("Form submitted Username:", name);
    console.log("Form submitted Password:", password);
    console.log("Form submitted E-mail:", email);
    alert("ส่งข้อมูลเรียบร้อยแล้ว");
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <div className="text-2xl font-bold text-center mb-4 text-gray-800">
        สมัครสมาชิก
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            ชื่อของคุณ
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            รหัสผ่านของคุณ
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            อีเมลของคุณ
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          สมัครสมาชิก
        </button>
      </form>
      <div className="mt-6 text-gray-700">
        {submittedName && <p>สวัสดี, {submittedName}!</p>}
        {submittedPassword && (
          <p>
            <br />
            รหัสผ่านของคุณคือ: {submittedPassword}
          </p>
        )}
        {submittedEmail && (
          <p>
            <br />
            อีเมลของคุณคือ: {submittedEmail}
          </p>
        )}
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <Nav />
      <GreetingForm />
    </>
  );
}

export default Home;
