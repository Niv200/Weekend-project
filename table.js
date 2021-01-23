
    // const input = document.getElementById("input").value;
    // const output = document.getElementById("output");
    // let out = "";
    // output.innerText = out;
let table = [
    { //Headers
        startedAt: "Started At",
        finishedAt: "Finished At",
        totalTime: "Total Time",
        tasksGiven: "Given Tasks",
        tasksFinished: "Finished Tasks",
        tasksFinishedPercent: "Tasks percentage",
        topic: "Topic"
    },
    { //1
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0, //6
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0, //70%
        topic: 'HTML'
    },
    { //2
        startedAt: new Date("2021-01-19:10:00"),
        finishedAt: new Date("2021-01-19:19:00"),
        totalTime: 0, //9
        tasksGiven: 20,
        tasksFinished: 19,
        tasksFinishedPercent: 0, //95%
        topic: 'CSS'
    },
    { //3
        startedAt: new Date("2021-01-21:08:00"),
        finishedAt: new Date("2021-01-21:10:00"),
        totalTime: 0, //2
        tasksGiven: 13,
        tasksFinished: 6,
        tasksFinishedPercent: 0, //46%
        topic: 'Javascript'
    },
    { //4
        startedAt: new Date("2021-01-22:08:00"),
        finishedAt: new Date("2021-01-22:20:00"),
        totalTime: 0, //12
        tasksGiven: 31,
        tasksFinished: 27,
        tasksFinishedPercent: 0, //87
        topic: 'Array'
    },
    { //5
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'Objects'
    },
    { //6
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'VSCode'
    },
    { //7
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'Function'
    },
    { //8
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'Loops'
    },
    { //9
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'Node'
    },
    { //10
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        totalTime: 0,
        tasksGiven: 10,
        tasksFinished: 7,
        tasksFinishedPercent: 0,
        topic: 'GitHub'
    }
]
for(let i = 1; i < table.length; i++){
    timeAndPercentage(table[i]);
    convertTime(table[i]);
}
console.log(table[0].tasksFinishedPercent);
console.log(table[0].totalTime);

console.log(table[2].tasksFinishedPercent);
console.log(table[2].totalTime);

console.log(table[3].tasksFinishedPercent);
console.log(table[3].totalTime);

constructTable(false);
constructTableHeader(table[0]);
writeObj(table[1]);
writeObj(table[2]);
writeObj(table[3]);
writeObj(table[4]);
writeObj(table[5]);
writeObj(table[6]);
writeObj(table[7]);
writeObj(table[8]);
writeObj(table[9]);
constructTableHeader(true);
/**
 * 
  <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
 */

function convertTime(obj){
    obj.startedAt = obj.startedAt.getHours() + ":00";
    obj.finishedAt = obj.finishedAt.getHours() + ":00";
}
function timeAndPercentage(obj){
    let t = timeDifference(obj.startedAt, obj.finishedAt);
    obj.totalTime = (t * -1);
    let p = findPercentage(obj.tasksGiven, obj.tasksFinished);
    obj.tasksFinishedPercent = p;
}
function timeDifference(startedAt, finishedAt){
    let a = startedAt - finishedAt;
    return (a / 3600000);
}

function findPercentage(tasksGiven, tasksFinished){
    let a = tasksFinished/tasksGiven;
    a = a * 100;
    a = Math.floor(a + 0.5);
    return a;
}
function constructTable(end){
    if(end === true){
        document.write('</table>');
    }else{
        document.write('<table>');
    }
}

function constructTableHeader(header){
    document.write('<tr>');
    for(let i in header){
        document.write('<th>' + header[i] + '</th>');
        console.log(header[i]);        
    }
    document.write('</tr>');
}

function writeObj(obj){
    document.write('<tr>');
    for(let i in obj){
        document.write('<td>' + obj[i] + '</td>');
    }
    document.write('</tr>');
}