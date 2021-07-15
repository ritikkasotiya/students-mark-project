// student grade calculator 
// 1. find total 
// 2. find percentage
// 3. find grade 
// 4. check pass or fail 
// 5. combined all and show output

const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let Grades = "";

    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    

    let perc = (totalGrades/400) * 100;
    

    if(perc <= 100 && perc >= 80){
        Grades ="A";
    }
    else if(perc <= 79 && perc >= 60){
        Grades ="B";
    }
    else if(perc <= 59 && perc >= 40){
        Grades ="C";
    }else{
        Grades ="F";
    }

document.getElementById("showData").innerHTML =  ` out of 400 your total is ${totalGrades} , percentage is ${perc}%.  <br> your grade is ${Grades} ` 

}


