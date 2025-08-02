const fs=require('fs')

const filepath="./tasks.json";

const loadTasks=() =>{
    try {
        const dataBuffer= fs.readFileSync(filepath) //this return the file path in the form of JSON
        const dataJSON= dataBuffer.toString()  //here we are converting the JSON format to string
        return JSON.parse(dataJSON)  //parsing the string array
    } catch (error) {
        return []
    }
}

const command=process.argv[2]
const argument=process.argv[3]

const addTask=(task)=>{
    const tasks=loadTasks();
    tasks.push(task)
    saveTask(tasks)
    console.log('Task is Added ',task);
}

const saveTask=(tasks)=> {
    const dataJSON=JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON)
}


const listTasks=()=>{
    const tasks=loadTasks()
    tasks.forEach((element, index) => {
        console.log(`${index + 1}. ${element}`);
    });
}

const removeTask = (task) => {
    const tasks = loadTasks();
    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);  // This modifies the original array
        console.log(`✅ Removed: ${task}`);
        saveTask(tasks);
    } else {
        console.log(`❌ Task not found: ${task}`);
    }
};


if(command === 'add'){
    addTask(argument)
}
else if(command === 'list'){
    listTasks()
}
else if(command === 'remove'){
    removeTask(argument)
}
else{
    console.log('Command Not Found !');
}

