const geocode=require('./utilss/geocode')
const forecast=require('./utilss/forecast')

const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()

const diraddress=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.use(express.static(diraddress))
app.set('views',viewpath)

hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
    res.render('',{
        title:'WEATHER',
        name:'sohan'
    })
})


app.get('/index',(req,res)=>{
    res.render('index',{
        title:'dynamic',
        name:'sohan tipre'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'dynamic',
        name:'sohan tipre'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'dynamic',
        error:'error',
        name:'sohan tipre'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
         error:'you must provide a address'})
        
    }
    geocode(req.query.address,(error,{longitude,latitude,location}={})=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(longitude,latitude,(error,forecastdata)=>{
            if(error){
                return res.send({
                 error
                })
            
            }
            res.send({
                forecast:forecastdata,
                location,
                address:req.query.address
            })

        })

    })
           
       
   })
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errormessage:'this page does not exist!',
        title:'404',
        name:'sohan'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errormessage:'this help page is not found ',
        name:'you'


    })

})

 
app.listen(3000,()=>{
    console.log('process has taken place!')
})