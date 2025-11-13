const MainContent = () => {
  return (
    <div className="w-full">
      <div className="h-48 bg-black w-full"/>
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4">
          <div className="h-72 rounded-2xl -translate-x-20 shadow col-span-3 bg-amber-200 -mt-16" />
          <div className="h-[600px] mt-20 rounded-2xl shadow col-span-6 bg-red-300" />
          <div className="h-[600px] mt-20 rounded-2xl shadow col-span-3 translate-x-50 bg-yellow-300" />
        </div>
    </div>
  );
};

export default MainContent;
