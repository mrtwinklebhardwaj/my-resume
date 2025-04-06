import React from 'react'

const IntroCard = () => {
  return (
    <div className='intro-box shadow-2xl rounded-xl p-6 bg-[#121212]'>
    <img src="/images/twinkle-photo.png" alt="Twinkle Bhardwaj" className="mb-8 m-auto" />
    <p className="text-center text-[16px] text-[#fff] font-medium ">Product Desinger/Developer.</p>
    <p className="text-center text-[16px] text-[#fff] font-medium mb-4">Noida, India.</p>

    <div className="icons flex justify-center space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/mr-twinkle/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                <i className="ri-linkedin-box-line text-white text-2xl group-hover:text-[#fff]"></i>
            </div>
        </a>
        <a href="callto:+917065406084" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                <i className="ri-phone-line text-white text-2xl group-hover:text-[#fff]"></i>
            </div>
        </a>
        <a href="mailto:mrtwinkle@outlook.com" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                <i className="ri-mail-line text-white text-2xl group-hover:text-[#fff]"></i>
            </div>
        </a>
        <a href="https://github.com/mrtwinklebhardwaj" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                <i className="ri-github-line text-white text-2xl group-hover:text-[#fff]"></i>
            </div>
        </a>
    </div>
</div>
  )
}

export default IntroCard