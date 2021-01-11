let data={};

let url=(ev)=>{
  ev.preventDefault();

    v= document.getElementById("url").value;
    console.log(v,"v");
    data["name"]=v;
    console.log(data)
    document.querySelector('form').reset()

}
document.getElementById('submit').addEventListener('click',url);

let links="https:localhost:3000/longurl";

fetch(links,{
    method:'POST',
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)
})
.then(Response=>{console.log(Response.json())})
.then(dat=>{console.log(dat)})
.catch(error=>{
    console.log(error)})

