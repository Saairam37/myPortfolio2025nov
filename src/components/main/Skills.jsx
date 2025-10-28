import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center p-10 gap-10'>
        <h1 className='text-3xl font-bold'>My Skills are,</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-gray-100 col-span-1 p-5 rounded-2xl shadow-2xl pb-10'>
                <h1 className='sm:text-2xl text-xl font-bold'>Frontend</h1>
                <div className='lg:text-xl text-sm grid grid-cols-3 gap-10 mt-10 [&>div]:justify-center [&>div]:items-center-safe [&>div]:w-full [&>div>img]:min-h-full [&>div>img]:w-min sm:[&>div]:h-20 [&>div]:h-10 [&>div>h1]:text-center [&>div>h1]:font-semibold [&>div]:flex [&>div]:flex-col [&>div>h1]:items-self-center [&>div>h1]:mt-2'>
                    <div>
                        <img src="assets\HTML-5.png" alt="" />
                        <h1>HTML</h1>
                    </div>
                    <div>
                        <img src="assets\css3.svg" alt="" />
                        <h1>CSS</h1>
                    </div>
                    <div>
                        <img src="assets\javascript.png" alt="" />
                        <h1>Javascript</h1>
                    </div>
                    <div>
                        <img src="assets\tailwindcssss.png" alt="" className='rounded-full' />
                        <h1>TailwindCSS</h1>
                    </div>
                    <div>
                        <img src="assets\react.svg" alt="" />
                        <h1>ReactJS</h1>
                    </div>
                    <div>
                        <img src="assets\redux.png" alt="" className='mix-blend-multiply'/>
                        <h1>Redux</h1>
                    </div>
                    <div>
                        <img src="assets\shadcn.png" alt="" />
                        <h1>ShadCN/UI</h1>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-5 col-span-1 rounded-2xl shadow-2xl'>
                <h1 className='sm:text-2xl text-xl font-bold'>Backend</h1>
                <div className='lg:text-xl text-sm grid grid-cols-3 gap-10 mt-10 [&>div]:justify-center [&>div]:items-center-safe [&>div]:w-full [&>div>img]:min-h-full [&>div>img]:w-min sm:[&>div]:h-20 [&>div]:h-10 [&>div>h1]:text-center [&>div>h1]:font-semibold [&>div]:flex [&>div]:flex-col [&>div>h1]:items-self-center [&>div>h1]:mt-2 pb-10 sm:pb-0'>
                    <div>
                        <img src="assets\nodejs-image.webp" alt="" />
                        <h1>NodeJS</h1>
                    </div>
                    <div>
                        <img src="assets\express.webp" alt="" />
                        <h1>EXpressJS</h1>
                    </div>
                    <div>
                        <img src="assets\mysql (1).png" alt="" />
                        <h1>MySQL</h1>
                    </div>
                    <div>
                        <img src="assets\mongodb.png" alt="" className='rounded-full' />
                        <h1>MongoDB</h1>
                    </div>
                    <div>
                        <img src="assets\mongooselogo.png" alt="" />
                        <h1>Mongoose</h1>
                    </div>
                </div>
                
            </div>
            <div className='bg-gray-100 p-5 col-span-1 sm:col-span-2 lg:col-span-1  rounded-2xl shadow-2xl'>
                <h1 className='sm:text-2xl text-xl font-bold'>Tools/Utilities</h1>
                <div className='lg:text-xl text-sm grid grid-cols-3 gap-10 mt-10 [&>div]:justify-center [&>div]:items-center-safe [&>div]:w-full [&>div>img]:min-h-full [&>div>img]:w-min sm:[&>div]:h-20 [&>div]:h-10 [&>div>h1]:text-center [&>div>h1]:font-semibold [&>div]:flex [&>div]:flex-col [&>div>h1]:items-self-center [&>div>h1]:mt-2 pb-10 lg:pb-0'>
                    <div>
                        <img src="assets\postman.jpg" alt="" className='mix-blend-multiply'/>
                        <h1>Postman</h1>
                    </div>
                    <div>
                        <img src="assets\vscode.png" alt="" />
                        <h1>VS Code</h1>
                    </div>
                    <div>
                        <img src="assets\github.png" alt="" />
                        <h1>GitHub</h1>
                    </div>
                    <div>
                        <img src="assets\netlify.png" alt="" className='rounded-full' />
                        <h1>Netlify</h1>
                    </div>
                    <div>
                        <img src="assets\Render logomark - Black.png" alt="" />
                        <h1>Render</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills