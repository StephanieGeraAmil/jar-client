import React from 'react'

const AddButtonsSection = () => {
    return (
        <div className="horizontalSection">
             <a href="">
                    <div className="wallet">
                        <div  className="direction div_img" style={{
                        backgroundImage: `url("/imgs/in.png")`
                        }}>
                        </div>
                        <div  className="picture div_img" style={{
                        backgroundImage: `url("/imgs/wallet.png")`
                        }}>
                        </div>
                    </div>
            </a>
            <a href="">
                 <div className="wallet">
                        <div  className="direction div_img" style={{
                        backgroundImage: `url("/imgs/out.png")`
                        }}>
                        </div>
                        <div  className="picture div_img" style={{
                        backgroundImage: `url("/imgs/wallet.png")`
                        }}>
                        </div>
                    </div>
                    
            </a>          
            
        </div>
    )
}

export default AddButtonsSection;
