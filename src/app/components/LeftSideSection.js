import Image from "next/image";
import SocialLinks from "./SocialLinks";
//  

export default function LeftSideSection() {
    return (
        <div className="bg-white custom-card text-black pt-8 pb-8 p-8 rounded-3xl w-[350px] max-h-[550px] flex flex-col justify-between items-center h-screen sticky top-[80px] self-start">
            <div className="w-[240px] h-[248px] bg-gray-300 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <Image
                    src="/twinkle.jpg"
                    unoptimized={true}
                    alt="Twinkle Bhardwaj"
                    width={240}
                    height={248}
                    className="rounded-xl object-cover w-full h-full"
                />
            </div>
            <h2 className="text-2xl font-semibold">Twinkle Bhardwaj</h2>
            <hr className="w-full border-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-4">Crafting intuitive and scalable digital solutions with a passion for innovation.</p>
            <div className="flex gap-4 text-2xl">
                <SocialLinks />
            </div>
        </div>
    )
}