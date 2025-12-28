import React from 'react';

const VideoSection = () => {
    return (
        <section className="relative w-full py-10 md:py-20 overflow-hidden bg-background">
            {/* Video Card */}
            <div className="relative z-10 w-full max-w-[90%] mx-auto h-[400px] md:h-[600px] rounded-[30px] overflow-hidden group">
                 {/* Video Background */}
                 <div className="absolute inset-0 w-full h-full bg-[#1a0b2e]">
                    <video 
                        src="/hero.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/10"></div>
                 </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <h3 className="text-4xl md:text-8xl text-white font-instrument-serif text-center max-w-4xl leading-tight px-4 drop-shadow-lg">
                        From data to intelligence.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
