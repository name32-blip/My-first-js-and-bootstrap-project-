var arr = []
function func1() {

    var taskName = document.getElementById("taskName").value
    var ball = document.getElementById("ball").value

    if(taskName !=='' && ball !==''){
        arr.push({
            taskName: taskName,
            ball: ball
        })
        chizish()
    }else{
       alert("inputni toldiring!")
    }

   
    console.log(arr);
}

        function chizish() {
            var ch = ''
            for (var i of arr) {
                ch = ch + `
                    <h4>${i.taskName} -  ${i.ball}</h4>
                `
            }

            document.getElementById('display').innerHTML = ch
            document.getElementById(`taskName`).value = ''
            document.getElementById(`ball`).value = ''
        }