import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const data = [
  {
    faviconColor: "#3b82f6",
    category: "Video",
    username: "learner_56",
    password: "646464646",
    id: "dafd08ab-cbf3-434a-ba25-a3f3a4a41870",
    textIcon: "AP",
    hostname: "apple.com",
    domain: "Apple",
  },
  {
    faviconColor: "#3b82f6",
    category: "Streaming",
    username: "learner_56",
    password: "646464646",
    id: "355915d5-fd63-4afc-a9c3-06d6b619a0d0",
    textIcon: "FB",
    hostname: "facebook.com",
    domain: "Facebook",
  },
  {
    faviconColor: "#3b82f6",
    category: "Streaming",
    username: "learner_56",
    password: "646464646",
    id: "9d91aa7b-da0c-4156-91c6-dbc93a6882db",
    textIcon: "YT",
    hostname: "youtube.com",
    domain: "YouTube",
  },
];

const App = () => {
  const [passwordsCardData, setPasswordsCardData] = useState(data);

  const handleAddPassword = (newData) => {
    setPasswordsCardData((prevData) => [newData, ...prevData]);
  };

  console.log(passwordsCardData);
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
