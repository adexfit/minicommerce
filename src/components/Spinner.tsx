const Spinner = () => {
  return (
    <div>
      <div
        className="flex min-h-screen items-center justify-center bg-white"
        role="status"
      >
        <div className="size-16 animate-spin rounded-full border-4 border-custom-color2 border-t-transparent" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
