import EmptyCard from "./EmptyCard";
import PasswordCardItem from "./PasswordCardItem";

const PasswordCards = ({ passwordsCardData }) => {
  if (passwordsCardData.length === 0) return <EmptyCard />;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {passwordsCardData.map((item) => (
        <PasswordCardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PasswordCards;
