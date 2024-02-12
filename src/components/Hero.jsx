import { memoji } from '../assets';
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 mb:6">
                <div className="lg:col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6cl font-extrabold">
                        {/* from-[#7defaae9] to-[#007EA7] */}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#44c2ee] to-[#4383ae]'>Hello there! I&apos;m{" "}</span>
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            "Ben",
                            1300,
                            "Software Engineer",
                            1300,
                            "Engineering Leader",
                            1300,
                            "Tech Enthusiast",
                            1300,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl">
                        I&apos;m a software professional with a passion for building scalable and reliable systems.
                        I have 11 years experience working in, leading, and building engineering teams that deliver high-quality software.
                    </p>
                </div>
                <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#cfe8d9] relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                        <img 
                            src={memoji} 
                            alt="Ben Worsley" 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
