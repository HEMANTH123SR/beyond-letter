import { TypewriterEffect } from "@/components/typewriter-effect"
import { WavyBackground } from "@/components/wavy-background"
const Page = () => {
    return (
        <div >
            <WavyBackground>
                <TypewriterEffect
                    words={[
                        {
                            text: "Beyond",
                            className:
                                " text-[#60A5FA] text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem] ",
                        },
                        {
                            text: "Letter",
                            className:
                                "text-white text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem] ",
                        },
                    ]}
                />
            </WavyBackground>
        </div>
    )
}

export default Page
