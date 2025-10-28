import React from 'react'

const ImgSlider = ({ props }) => {

    let imgURLs = props.URLs

    return (
        <div className='w-auto flex flex-col justify-center items-center m-5 bg-white'>
            <div>{props.Name}</div>
            <div className="carousel">
                <div className="group">                    
                    {
                        imgURLs.map(url=>{
                            let imgUrl = url.split(" ").join("\\");
                            return(
                                <div className="card" key={url.split(" ")[3]}>
                                    <img src={imgUrl} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div aria-hidden className="group">
                    {
                        imgURLs.map(url=>{
                            let imgUrl = url.split(" ").join("\\");
                            return(
                                <div className="card" key={url.split(" ")[3]}>
                                    <img src={imgUrl} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>{props.Description}</div>
        </div>
    )
}

export default ImgSlider