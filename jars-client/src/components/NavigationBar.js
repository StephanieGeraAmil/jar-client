import React from 'react'

export const NavigationBar = () => {
    return (
        <div className='navigation_bar'>
             <div onClick={()=>{}}>
                 
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/Dashboard.png")`
                    }}>
                    </div>
                </div>
            <div onClick={()=>{}}>
                  
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/distribution.png")`
                    }}>
                    </div>
                </div>
             <div onClick={()=>{}}>
                  
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/calendar.png")`
                    }}>
                    </div>
                </div>
            
             <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/trophy.png")`
                    }}>
                    </div>
                </div>
            
             <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/user.png")`
                    }}>
                    </div>
                </div>
             
            
        </div>
    )
}
