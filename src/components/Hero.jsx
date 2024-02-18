import { memoji } from '../assets';
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
    return (
        <section className='h-screen'>
            <div className="grid grid-cols-1 sm:grid-cols-12  mb-6 lg:mb-10">
                <div className="lg:col-span-7 place-self-center mb-6 lg:mb-10 text-center sm:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7defaae9] to-[#007EA7]'>Hello, I&apos;m{" "}</span>
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            "Ben",  
                            1300,
                            "Engineer",
                            1300,
                            "Dev Manager",
                            1300,
                            "Tech Lead",
                            1300,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className='text-[#121212]'
                        />
                    </h1>
                    <p className="text-base text-[#121212] sm:text-lg lg:text-xl max-w-3xl">
                        I love to create value through software and build teams who grow and develop together.
                    </p>
                </div>
                <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                        <img 
                            src={memoji} 
                            alt="Ben Worsley" 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px]"
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 md:gap-3 lg:gap-4 lg:pt-10 items-center justify-center'>
                <div className='bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] h-16 p-1 w-80'>
                    <div className='h-full w-full bg-[#F2F2F2] flex justify-center items-center'>
                        <p className='text-center text-lg text-[#121212]'>
                            - 2nd engineer at UK Unicorn
                        </p>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] h-16 p-1 w-80'>
                    <div className='h-full w-full bg-[#F2F2F2] flex justify-center items-center'>
                        <p className='text-center text-lg text-[#121212]'>
                            - Built 30+ engineering pod
                        </p>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] h-16 p-1 w-80'>
                    <div className='h-full w-full bg-[#F2F2F2] flex justify-center items-center'>
                        <p className='text-center text-lg text-[#121212]'>
                            - 11 years experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
