

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

//  let order = ( fruit_name,call_production) =>{
    

//         setTimeout(function(){
      
//           console.log(`${stocks.Fruits[fruit_name]} was selected`)
      
//       // Order placed. Call production to start
//          call_production();
//         },2000)
//       };
    
//     // function 👇 is being called 
    
    
//     let production = () =>{
//         setTimeout(()=>{
//             console.log("production has started")
//           },10000)
//           setTimeout(()=>{
//             console.log("The fruit has been chopped")
//           },2000)
//           setTimeout(()=>{
//             console.log("production has started")
//             setTimeout(()=>{
//               console.log("The fruit has been chopped")
//               setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//                 setTimeout(()=>{
//                   console.log("start the machine")
//                   setTimeout(()=>{
//                     console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                     setTimeout(()=>{
//                       console.log(`${stocks.toppings[0]} as toppings`)
//                       setTimeout(()=>{
//                         console.log("serve Ice cream")
//                       },2000)
//                     },3000)
//                   },2000)
//                 },1000)
//               },1000)
//             },2000)
//           },10000)
        
        
//     };

//     //function invocation
//     order( 3,production);


let is_shop_open

let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{

  
      if( is_shop_open ){

 
        resolve(work() )
  
      }
  
      else{
  
        reject( console.log("Our shop is closed") )
  
      }
  
    })}
  
  order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
  .then(()=>{
    return order(10000,()=>console.log('production has started'))
  })
  // step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return order(10000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})

.catch(()=>{
    console.log("Customer left")
  })

  .finally(()=>{
    console.log("end of day")
  })
