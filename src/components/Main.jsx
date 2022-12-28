import React from 'react'

const Main = () => {
    return (
        <main id="main">
            <div className='slideshow-container'>
                <div className='mySlides fade'>
                    <div className='numbertext'>1 / 3</div>
                    <img src="https://occ-0-300-990.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUhJMx1ZGjVQ6PrRpwkawoR_l5TWtESU4TTngpctPd5SyCN91X2TNF6IAKmXJpv9oISMu_brPcvDToTLAYabaOykcOfpmLeyCDvF.jpg?r=60a" style="width:100%"/>
                    <div className='text'>Caption Text</div>
                </div>
        
                <div className='mySlides fade'>
                    <div className='numbertext'>2 / 3</div>
                    <img src="./images/bkg.png" style="width:100%"/>
                    <div class="text">Caption Two</div>
                </div>
        
                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="./images/bkg.png" style="width:100%"/>
                    <div className='text'>Caption Three</div>
                </div>
        
                <a className='prev' onclick="plusSlides(-1)">&#10094;</a>
                <a className='next' onclick="plusSlides(1)">&#10095;</a>
                <br/>

                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div> 

            </div>
        </main>
    )
}

export default Main