import React from 'react'

const BannerContent = () => {
    return (
        <>
            <h1 className="font-bold text-[56px] text-[#E3ECFF] text-center mb-16" id="home" style={{ lineHeight: '1.2' }}>Hi, I’m Twinkle Bhardwaj, a UI Engineer.</h1>
            <div className='designation text-center text-[32px] font-bold text-[#E3ECFF] mb-8 ml-auto mr-auto'>
                FRONT-END DEVLOPER
            </div>
            <p className='text-center text-[28px] font-semibold text-[#E3ECFF] mb-4 ml-auto mr-auto'>
                Based in Noida, India.</p>
            <p className='text-center text-[28px] font-semibold text-[#E3ECFF] mb-4 mx-auto'>
                Specialized in <span className='tech-stack'>ReactJs</span> and <span className='tech-stack'>UI Architecture</span>
            </p>
            <div className="flex justify-center gap-4 mt-6 mb-8">
                <a href="mailto:mrtwinkle@outlook.com" className="gradient-outline-btn">
                    Say Hi
                </a>
                <a href="/twinkle_bhardwaj_resume.pdf" target="_blank" rel="noopener noreferrer" className="gradient-outline-btn">
                    Resume
                </a>
            </div>
        </>
    )
}

export default BannerContent