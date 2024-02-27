import Link from "next/link";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { UserNameTypewriterEffect } from "@/components/username-typewriter-effect";
import { LetterOptionsTabs } from "@/components/letter-options-tabs";
import { InfiniteMovingCardsDemo } from "@/components/repeating-moving-review"

export default function Home() {
  return (
    <main className="flex flex-col  min-h-[600vh] ">
      <div className="w-full pl-3 pr-4 md:pl-6 md:pr-20  mt-4 md:mb-6 md:mt-10">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem]">
          Write a letter or{" "}
          <span className="hidden md:inline">record video</span> to your future
          self
        </h2>
        <h4 className="md:hidden  text-blue-400 font-sans font-bold pr-6">
          Your letter and videos are safe with use we have sent our 😄
          <span className="text-blue-300">100</span> letters & videos in
          <span className="text-blue-300"> 1week</span>
        </h4>
        <h4 className="hidden md:block text-2xl text-blue-400 font-sans font-bold">
          Your letter and videos are safe with use we have sent our 😄
          <br /> <span className="text-blue-300"> 100</span> letters & videos in{" "}
          <span className="text-blue-300 ">1week</span>
        </h4>
      </div>
      <div className="my-8">
        <UserNameTypewriterEffect />
      </div>
      <MacbookScroll
        title=""
        src="/linear.webp"
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        showGradient={false}
      />
      <div className="min-h-[30vh] md:min-h-[40vh] lg:min-h-[45vh] xl:min-h-[120vh]"></div>
      <h1 className="text-3xl mt-2 font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem] text-center">
        BeyondLetter
      </h1>
      <p className="text-base font-sans text-center text-blue-200 font-semibold">
        Write a letter to future , Capture Your Today for a Message to Tomorrow
      </p>
      <LetterOptionsTabs />
      <div className="my-4"></div>
      <InfiniteMovingCardsDemo />
    </main>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};

