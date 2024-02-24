import TimeIllustartion from "../../public/3d-plastilina-three-quarter-view-of-a-blue-clock.png";
import { GiNotebook, GiAudioCassette } from "react-icons/gi";
import { BiSolidVideoRecording } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full pl-3 pr-4 md:pl-6 md:pr-20 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem]">
          Write a letter or{" "}
          <span className="hidden md:inline">record video</span> to your future
          self
        </h2>
        <h4 className="md:hidden  text-blue-400 font-sans font-bold pr-6">
          Your letter and videos are safe with use we have sent our 😄
          <span className="text-slate-200">100</span> letters & videos in
          <span className="text-slate-200"> 1week</span>
        </h4>
        <h4 className="hidden md:block text-2xl text-blue-400 font-sans font-bold">
          Your letter and videos are safe with use we have sent our 😄
          <br /> <span className="text-slate-200"> 100</span> letters
          & videos in <span className="text-slate-200 ">1week</span>
        </h4>
      </div>
      <div className="flex px-12 pb-8">
        <div className="w-2/4 flex flex-col space-y-8 mt-12">
          <Link href={"/letter"}>
            <div className="flex justify-start items-center">
              <div className=" rounded-lg px-12 py-3 flex flex-col justify-center items-center min-w-80 cursor-pointer hover:bg-blue-600 space-x-3">
                <div className="flex space-x-3 justify-center items-center">
                  <GiNotebook className="rounded-full  text-white text-5xl" />
                  <h3 className="text-3xl font-bold">Letter</h3>
                </div>
                <div className=" justify-center items-center flex ">
                  <p className="text-xs font-semibold font-sans px-1">
                    Write a letter for your future self
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/video"}>
            <div className="flex justify-start items-center">
              <div className=" rounded-lg px-12 py-3 flex flex-col justify-center items-center min-w-80 cursor-pointer hover:bg-blue-600 space-x-3">
                <div className="flex space-x-3 justify-center items-center">
                  <BiSolidVideoRecording className="rounded-full  text-white text-5xl" />
                  <h3 className="text-3xl font-bold">Video</h3>
                </div>
                <div className=" justify-center items-center flex ">
                  <p className="text-xs font-semibold font-sans">
                    Record a Video for your future self
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/record"}>
            <div className="flex justify-start items-center">
              <div className="rounded-lg px-12 py-3 flex flex-col justify-center items-center min-w-80 cursor-pointer hover:bg-blue-600 space-x-3">
                <div className="flex space-x-3 justify-center items-center">
                  <GiAudioCassette className="rounded-full  text-white text-5xl" />
                  <h3 className="text-3xl font-bold">Audio</h3>
                </div>
                <div className=" justify-center items-center flex ">
                  <p className="text-xs font-semibold font-sans">
                    Record a Audio for your future self
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-2/4 flex justify-center items-center">
          <img src={TimeIllustartion.src} />
        </div>
      </div>
    </main>
  );
}
