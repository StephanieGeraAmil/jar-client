import React, { useState , useEffect} from 'react'
import { useSelector} from 'react-redux';

export const AvaiableOnJar = ({jar}) => {

    const movements=useSelector((state)=>state.movements);
    const transferences=useSelector((state)=>state.transactions);
    const [amount, setAmount]=useState(0)

    
    useEffect ( () => {
    let balance=0;
                       
       movements.map(movement =>{
        
            movement.jar.map(element=>
                {
    
                    if(element._id==jar._id){
                       
                        let newBalance=0;
                        if(movement.amount<0){
                            //is expense
                            newBalance=balance+(movement.amount)/(movement.jar.length);
                        }else{
                            const percentageThatHad=movement.jar.find(item=>item._id==jar._id).percentage;   
                            newBalance=balance+(percentageThatHad/100)*movement.amount;
                            
                        }
                         balance=newBalance;

                    }
                  
                }
            );
           
              
        }
       );
     
        // transferences.map(item=>{
                
        //          if(item.origin==jar._id){
        //             balance-=item.amount;
                    
        //          }
        //          if(item.destination==jar._id){
        //               balance+=item.amount;
        //          }
                
                     

        //     });
    setAmount(balance);
  
        }
    , [movements,transferences]);

   
    return (
        <>

         {(() =>{ 
            let fullnes = 'Empty';

            if(amount<0){
              fullnes= 'Debt';
            }else if(amount==0){
                fullnes= 'Empty';
            }else if(amount<=100 && amount>0){
                fullnes='SomeCoin';
            }else if(amount<=1000 && amount>100){
                fullnes='Medium';
            }else if(amount>=1000 && amount<=10000 ){
                fullnes='Full';
            }else if(amount>=10000){
                fullnes='Filled';
            };  


        
             
            switch(fullnes){
              case ('Debt'): return  ( <div  className="jar_img div_img" style={{
                                                backgroundImage: `url("/imgs/jar0coins.png")`
                                                }}>
                                        </div>)
              case ('Empty'): return  (<div  className="jar_img div_img" style={{
                                                backgroundImage: `url("/imgs/jar0coins.png")`
                                                }}>
                                        </div>)
              case ('SomeCoin'): return ( <div  className="jar_img div_img" style={{
                                        backgroundImage: `url("/imgs/almostEmptyJar.png")`
                                        }}>
                                    </div>)
              case ('Medium'): return ( <div  className="jar_img div_img" style={{
                                                            backgroundImage: `url("/imgs/jarMediumCoins.png")`
                                                            }}>
                                                        </div>)
              case ("Full"): return (<div  className="jar_img div_img" style={{
                                                backgroundImage: `url("/imgs/jarManycoins.png")`
                                                }}>
                                        </div>   ) 
              case ("Filled"): return (<div  className="jar_img div_img" style={{
                                                backgroundImage: `url("/imgs/filledJar.png")`
                                                }}>
                                        </div>   ) 
             
            }
          })()
      }
             <h4 className="balance_jar">${amount}</h4>
        </>
    )
}
