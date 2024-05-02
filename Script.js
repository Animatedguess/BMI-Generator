let form = document.getElementById("form");
const reset = document.getElementById("b2");
const Guide = document.getElementById("Guide");
form.addEventListener("submit",function(e){
    e.preventDefault()
    const Height = parseFloat(document.getElementById("Height").value);
    const Weight = parseFloat(document.getElementById("Weight").value);
    const result = document.getElementById("result");
    if(Weight<=0||Height<=0){
        alert("Please Enter valid values of Height and Weight");
    }
    else{
        const cal = Math.round(Weight/(Height*Height));
        const point = document.getElementById("g");
        if(cal<=18.6){
            point.textContent="-> Under Weight";
        }
        else if(18.6<cal&&cal<=24.9){
            point.textContent="-> Normal";
        }
        else{
            point.textContent="-> Overweight";
        }
        result.textContent=`calculated BMI is: ${cal}`;
        Guide.style.visibility="visible";
    }
})

reset.addEventListener("click",function(){
    location.reload()
})
