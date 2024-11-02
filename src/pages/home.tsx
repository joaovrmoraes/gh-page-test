export function Home() {
  return (
    <div className="h-screen w-screen bg-zinc-950 flex items-center justify-center">
      <div className="relative h-96 w-96 rounded-full border border-zinc-700 flex items-center justify-center">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-orbit"></div>

        <div className="relative h-80 w-80 rounded-full bg-gradient-to-b from-blue-600 to-purple-400 shadow-2xl shadow-zinc-600" />
      </div>
    </div>
  );
}
