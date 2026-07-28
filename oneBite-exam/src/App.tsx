import "./App.css";

function App() {
  return (
    <div>
      {/* 1.타이포그래피 typography */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,20)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2.백그라운드 컬러 background color */}
      <div className="bg-amber-500">bg-amber-500</div>

      {/* 3.사이징 sizing */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[90px] bg-blue-500">90px box</div>
      <div className="h-10 bg-green-500">h-10 box</div>

      {/* 4.여백 spacing - padding & margin */}
      <div className="m-5 h-50 w-50 bg-red-400 px-5">
        <div className="h-full w-full bg-blue-500"></div>
      </div>

      {/* 5. 보더 border */}
      <div className="border border-red-500">border</div>
      <div className="m-5 rounded-2xl border-2 p-5">border-2</div>
      <div className="m-5 border-x">border-x</div>
      <div className="m-5 border-y-2">border-x</div>
      <div className="border-l-3-red m-5">border-x</div>

      {/* 6. 플렉스 컨테이너 flex */}
      <div className="flex">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
      </div>
    </div>
  );
}

export default App;
