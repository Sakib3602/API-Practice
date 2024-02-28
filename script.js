let api = async ()=>{
    let res =await fetch("https://openapi.programming-hero.com/api/ai/tools");
    let data = await res.json()
    // console.log(data.data.tools)
    let tool = data.data.tools

    let x = tool.map(e => console.log(e.name))

    
}
api()