const request = require('request')
const geocode=(address,callback)=>{
    const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic29oYW50aXByZSIsImEiOiJja2RlYnAxbXgwaG9pMnF1Y3h4cTJudmp2In0.TzOnGjkY7pqmxSjlA4PwKw'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to th network',undefined)
        }
        else if(body.features.length===0){
            callback('unable to find the location',undefined)
        }
        else{
       callback(undefined,{
    
         
           longitude:body.features[0].center[0],
           latitude:body.features[0].center[1],
           location:body.features[0].place_name
    
    
        })}
    })
    }
    module.exports=geocode