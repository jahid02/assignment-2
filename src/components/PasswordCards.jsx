import PasswordCardItem from "./PasswordCardItem";

const PasswordCards = ({ passwordsCardData }) => {
  if (passwordsCardData.length === 0) return <p className="text-center text-neutral-500">No saved credentials found.</p>;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {passwordsCardData.map((item) => (
        <PasswordCardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PasswordCards;
