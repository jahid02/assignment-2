import NotFoundIcon from "../icon/NotFoundIcon";

const EmptyCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-neutral-600 p-8 text-neutral-600"
      data-sentry-component="EmptyList"
      data-sentry-source-file="EmptyList.tsx"
    >
      <NotFoundIcon />
      <div className="text-center">
        <p className="text-lg font-medium">Not Found</p>
        <p className="text-sm text-muted-foreground">Please add some credentials.</p>
      </div>
    </div>
  );
};

export default EmptyCard;
