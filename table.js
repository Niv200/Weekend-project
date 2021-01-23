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
        finishedAt: new Date("2021-01-20:14:00"),
        totalTime: 0,//1
        tasksGiven: 51,
        tasksFinished: 3,
        tasksFinishedPercent: 0,//6
        topic: 'Objects'
    },
    { //6
        startedAt: new Date("2021-01-20:10:00"),
        finishedAt: new Date("2021-01-20:22:00"),
        totalTime: 0, //12
        tasksGiven: 15,
        tasksFinished: 5,
        tasksFinishedPercent: 0, //33
        topic: 'VSCode'
    },
    { //7
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:16:00"),
        totalTime: 0, //3
        tasksGiven: 21,
        tasksFinished: 18,
        tasksFinishedPercent: 0, //86
        topic: 'Function'
    },
    { //8
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:14:00"),
        totalTime: 0, //1
        tasksGiven: 33,
        tasksFinished: 28,
        tasksFinishedPercent: 0, //85
        topic: 'Loops'
    },
    { //9
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:18:00"),
        totalTime: 0, //5
        tasksGiven: 50,
        tasksFinished: 50,
        tasksFinishedPercent: 0, //100
        topic: 'Node'
    },
    { //10
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:20:00"),
        totalTime: 0, //7
        tasksGiven: 42,
        tasksFinished: 18,
        tasksFinishedPercent: 0, //43
        topic: 'GitHub'
    }
]
//Calculating time taken and percentage
for(let i = 1; i < table.length; i++){
    timeAndPercentage(table[i]);
    convertTime(table[i]);
}

//Construction of table
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
writeObj(table[10]);
constructTable(true);
normalizeHeader();
normalize();
normalizeSize();

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
    }
    document.write('</tr>');
}

function writeObj(obj){
    document.write('<tr>');
    for(let i in obj){
        if(obj[i] === obj.totalTime){
            document.write('<td style = background-color:' + getTimeColor(obj[i]) + ';>' + obj[i] + '</td>');
        }else if(obj[i] === obj.tasksFinishedPercent){
            document.write('<td style = background-color:' + getPercentageColor(obj[i]) + ';>' + obj[i] + '</td>');
        }else{
            document.write('<td style = background-color:lightgray;>' + obj[i] + '</td>');
        }
    }
    document.write('</tr>');
}

function getPercentageColor(percent){
    if(percent >= 80){
        return 'green';
    }else if(percent >= 60){
        return 'yellow'
    }else if(percent >= 40){
        return 'orange'
    }else{
        return 'red';
    }
}

function getTimeColor(time){
    if(time >= 10){
        return 'SlateBlue';
    }else if(time >= 8){
        return 'DodgerBlue'
    }else if(time >= 5){
        return 'Violet'
    }else{
        return 'Gray';
    }
}

function setRowColor(color){
    let rows = document.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++){
        rows[i].style.backgroundColor = color;
    }
}


function normalizeHeader(){
    let rows = document.getElementsByTagName("tr");
    rows[0].style.borderRadius = '20px';
    rows[0].style.textAlign = 'center';
    rows[0].style.color = 'white';
    rows[0].style.backgroundColor = 'black';
    rows[0].style.fontSize = '30px';
    let headerRows = document.getElementsByTagName("th");
    for(let i = 0; i < headerRows.length; i++){
        headerRows[i].style.borderRadius = '10px';
    }
}

function normalize(){
    let rows = document.getElementsByTagName("tr");
    for(let i = 1; i < rows.length; i++){
        rows[i].style.textAlign = 'center';
        rows[i].style.color = 'white';
        rows[i].style.fontSize = '20px';
    }
}

function normalizeSize(){
    let rows = document.getElementsByTagName("td");
    for(let i = 0; i < rows.length; i++){
        rows[i].style.borderRadius = '10px';
    }
}