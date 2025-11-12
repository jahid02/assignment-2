import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [passwordsCardData, setPasswordsCardData] = useState([]);

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
