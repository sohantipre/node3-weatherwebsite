const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d67d2af611cb9ae89b67c0f15d10cd34&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('not connected to any network',undefined)
        }
        else if(body.error){
            callback('parameters not valid',undefined)
        }
        else{
        callback(undefined,
            'current tempearature is :'+body.current.temperature+'but feels like :'+body.current.feelslike
            
        )
        }
    })
}
module.exports=forecast