export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full pl-3 pr-4 md:pl-6 md:pr-20 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem]">
          Write a letter or <span className="hidden md:inline">record video</span> to your future self
        </h2>
        {/* <p className="text-lg py-1">
          or record videos to be delivered to your future self
        </p> */}
        <div className="text-4xl bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          Gradient Text
        </div>

      </div>
    </main>
  );
}
