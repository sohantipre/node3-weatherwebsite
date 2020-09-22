


const weatherform=document.querySelector('form')
const search=document.querySelector('input')

const messageone=document.querySelector('#first')
const messagetwo=document.querySelector('#second')



weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
 messageone.textContent='loading.....'
messagetwo.textContent=''

    const location=search.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageone.textContent=data.error
        }
        else{
        messageone.textContent=data.location
        messagetwo.textContent=data.forecast}
    })
})
    
})