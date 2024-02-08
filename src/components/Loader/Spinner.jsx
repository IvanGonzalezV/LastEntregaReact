const Spinner = () => {
  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div key={index} className="w-4 h-4 bg-emerald-500 rounded-full"></div>
      ))}
    </div>
  );
};

export default Spinner;
