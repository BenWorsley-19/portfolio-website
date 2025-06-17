import { memoji } from '../assets';
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
    return (
        <div className='min-h-[85vh] flex flex-col justify-center py-12 lg:py-0'>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:my-12 mb-8 lg:mb-12 gap-8">
                <div className="lg:col-span-7 place-self-center mb-8 lg:mb-12 text-center sm:text-left">
                    <h1 className="mb-6 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 animate-gradient-x'>Hello, I&apos;m{" "}</span>
                        <br></br>
                        <TypeAnimation
                        sequence={[  
                            "AI Engineer",
                            1300,
                            "LLM Ops",
                            1300,
                            "Tech Lead",
                            1300,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className='text-gray-800 drop-shadow-sm'
                        />
                    </h1>
                    <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-3xl leading-relaxed font-medium">
                        I'm Ben and here you'll find some projects I've delivered outside of my day job!
                    </p>
                </div>
                <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative rounded-full bg-gradient-to-br from-sky-100 via-white to-cyan-100 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] shadow-2xl border border-white/20 backdrop-blur-sm">
                            <img 
                                src={memoji} 
                                alt="Ben Worsley" 
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-8 lg:pt-12 items-center justify-center'>
                <div className='group relative'>
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                    <div className='relative backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-6 w-80 lg:w-96 transform hover:scale-105 transition-all duration-300'>
                        <p className='text-center text-lg lg:text-xl text-gray-700 font-semibold'>
                            🦄 2nd engineer at UK Unicorn
                        </p>
                    </div>
                </div>
                <div className='group relative'>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-400 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                    <div className='relative backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-6 w-80 lg:w-96 transform hover:scale-105 transition-all duration-300'>
                        <p className='text-center text-lg lg:text-xl text-gray-700 font-semibold'>
                            🚀 0→1 Product Builder
                        </p>
                    </div>
                </div>
                <div className='group relative'>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                    <div className='relative backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-6 w-80 lg:w-96 transform hover:scale-105 transition-all duration-300'>
                        <p className='text-center text-lg lg:text-xl text-gray-700 font-semibold'>
                        🌟 Team Builder & Mentor
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
