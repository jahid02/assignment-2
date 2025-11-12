import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const data = [
  {
    faviconColor: "#09b9dc",
    category: "Video",
    username: "learner_56",
    password: "sdfsafsfda",
    id: "647c93b0-3a57-44b5-a833-634d6c393765",
    textIcon: "GH",
    hostname: "github.com",
    domain: "GitHub",
  },
  {
    faviconColor: "#db002c",
    category: "Social",
    username: "Jahid010825",
    password: "sdfsdfsdfsdf",
    id: "b427c5a6-ab3d-41b2-b602-1f4a48727516",
    textIcon: "YT",
    hostname: "youtube.com",
    domain: "YouTube",
  },
  {
    faviconColor: "#3b82f6",
    category: "Social",
    username: "learner_56",
    password: "dsafsdfsdf",
    id: "067f1261-c113-435e-afd7-f56fb31d5ab7",
    textIcon: "TC",
    hostname: "tailwindcss.com",
    domain: "Tailwind CSS",
  },
];

const App = () => {
  const [passwordsCardData, setPasswordsCardData] = useState(data);

  const handleAddPassword = (newData) => {
    setPasswordsCardData((prevData) => [newData, ...prevData]);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Form */}
      <Form handleAddPassword={handleAddPassword} />

      {/* Main Content */}
      <MainContent passwordsCardData={passwordsCardData} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
