import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/typewriter-effect"
const Page = () => {
    const words = [
        {
            text: "Write",
            className: "text-white"
        },
        {
            text: "a",
            className: "text-white"
        },
        {
            text: "letter",
            className: "text-white"
        },
        {
            text: "or",
            className: "text-white"
        },
        {
            text: "record",
            className: "text-white"
        },
        {
            text: "video & audio",
            className: "text-white"
        },
        {
            text: "to",
            className: "text-white"
        },
        {
            text: "your",
            className: "text-white"
        },
        {
            text: "future",
            className: "text-white"
        },
        {
            text: "self",
            className: "text-white"
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div >
            <TypewriterEffectSmooth words={words} />
        </div>
    )
}

export default Page

//Write a letter or record video to your future self