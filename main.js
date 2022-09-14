const todocontainer = document.querySelector('#todocontainer')
const tododonecontainer =document.querySelector('#tododonecontainer')
const todonotdonecontainer =document.querySelector('#todonotdonecontainer')
const remaintodo =document.querySelector('#remaintodo')
const addtoall =document.querySelector('#addtoall')
const input = document.querySelector('#input')
let todos = [
    { id: 1, title: 'buy car', state: true },
    { id: 2, title: 'buy bag', state: true },
    { id: 3, title: 'buy milk', state: false },
]

const render = data => {
    renderdone(data.filter(item => item.state === true))
    renderNotdone(data.filter(item=>!item.state))
    // ramaintodo(data.filter(item=>!item.state))
    todocontainer.innerHTML =''
    data.map(item => (
        todocontainer.innerHTML += `
        <div style="display:flex; width:620px; justify-content:space-around;">
            <div>
                ${item.id}
            </div>
            <div>
                ${item.title}
            </div>
            <div onclick="checktodo(${item.id})">
                ${item.state}
            </div>
            <button onclick="deletetodo(${item.id})" class="button">
                delete
            </button>
        </div>
    `
    ));
}
const checktodo =id=>{
    todos =todos.map(item =>item.id === id ? {...item,state:!item.state} :item)
    render(todos)
}
const deletetodo =id=>{
    todos=todos.filter(item =>item.id !== id)
    render(todos)
}
const addtodo =()=>{
    todos =[...todos,{id:Math.floor(Math.random()*100),title:input.value ,state:false}]
    render(todos)
}
// const ramaintodo =(data)=>{
//     remaintodo.innerHTML =`${data.length} remain`
//     render(data)
// }
const renderdone = data => {
    tododonecontainer.innerHTML =''
    data.map(item => (
        tododonecontainer.innerHTML += `
        <div style="display:flex; width:620px; justify-content:space-around;">
            <div>
                ${item.id}
            </div>
            <div>
                ${item.title}
            </div>
            <div onclick="checktodo(${item.id})">
                ${item.state}
            </div>
            <button onclick="deletetodo(${item.id})" class="button">
                delete
            </button>
        </div>
    `
    ));
}
const renderNotdone = data => {
    todonotdonecontainer.innerHTML =''
    data.map(item => (
        todonotdonecontainer.innerHTML += `
        <div style="display:flex; width:620px; justify-content:space-around;">
            <div>
                ${item.id}
            </div>
            <div>
                ${item.title}
            </div>
            <div onclick="checktodo(${item.id})">
                ${item.state}
            </div>
            <button onclick="deletetodo(${item.id})" class="button">
                delete
            </button>
        </div>
    `
    ));
}

render(todos);
