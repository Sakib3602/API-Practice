let api = async () => {
  let res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  let data = await res.json();
  let tool = data.data.tools;
//   console.log(data)

  set(tool);

  modal(tool);
};
api();

function set(s) {
  let card = document.getElementById("card");

  s.forEach((s1) => {
    let cre = document.createElement("div");
    cre.classList = "card w-96  bg-base-100 shadow-xl p-5";

    cre.innerHTML = `

    <figure><img onclick="modal('${s1.id}'); my_modal_3.showModal()"  class="h-[250px]" src="${s1.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title mb-[10px]">
                Features
                
              </h2>
              <ol>
              <li>

              1. ${s1.features[0]}
            
              </li>
              <li>

              2. ${s1.features[1]}
            
              </li>
              <li>

              3. ${s1.features[2]}
            
              </li>
              </ol>
              
              <br>
              <div class="border-[1px] border-solid border-gray-600"></div>
              <br>
             
              <h2>${s1.name}</h2>
              <h4>${s1.published_in}</h4>

            </div>
    
    `;
    card.appendChild(cre);
  });
}

let getId = async (get) => {
  

  let res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${get}`
  );
  let data = await res.json();

  
made(data.data)
  
};

function made(p){

console.log("p",p)
    let name = document.getElementById("name")
    name.innerText = p.tool_name
    // name.innerText = `${p.tool_name}`
    

}

function modal(op) {
 

  

  getId(op);
}
