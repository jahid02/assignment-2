const EmptyCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-neutral-600 p-8 text-neutral-600"
      data-sentry-component="EmptyList"
      data-sentry-source-file="EmptyList.tsx"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-inbox h-12 w-12 text-muted-foreground"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
      </svg>
      <div className="text-center">
        <p className="text-lg font-medium">Not Found</p>
        <p className="text-sm text-muted-foreground">Please add some credentials.</p>
      </div>
    </div>
  );
};

export default EmptyCard;
