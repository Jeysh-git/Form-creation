let fieldQueryList = document.querySelectorAll(".field1");
let field2QueryList = document.querySelectorAll(".field2");
let subfieldQueryList = document.querySelectorAll(".sub-field1");
let checkBoxes;
let values;
let counter =0;

function insertInputFields(){
    
    checkBoxes = document.querySelectorAll('input[name="skills"]:checked');
    values = [];

    document.getElementById('val1').innerHTML = document.form.name.value;
    document.getElementById('val2').innerHTML = document.form.email1.value;

    checkBoxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    
    document.getElementById('val3').innerHTML = values;
    document.getElementById('val4').innerHTML = document.form.gender.value;
    document.getElementById('val5').innerHTML = document.form.degree.value;
    document.getElementById('val6').innerHTML = document.form.intro.value;
    document.getElementById('val7').innerHTML = document.form.file.value;
    console.log("fetching data....",counter++);
}

//-------using setInterval() to update the input fields--------------------

// setInterval(function() {insertInputFields()}, 1000);

//--------------------------------------------------------------------------

//--------using Debounce method---------------------------------------------

const debounce = function(callback,d){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
        callback.apply();
        },d)
    }
}

const applyDebounce = debounce(insertInputFields,1000);

//-----------------------------------------------------------------------------

//-----------using Throttling---------------------------------------------------

const throttle = function(callback,d){
    let flag = true;
    return function(){
        if(flag){
            callback.apply();
            flag = false;
            setTimeout(()=>{
                flag = true;
            },d)
        }
    }
}

const applyThrottle = throttle(insertInputFields,1000);

//---------------------------------------------------------------------------------

function clearInputFields(item){
    let itemChildren = item.children;
    itemChildren[1].value="";
}

fieldQueryList.forEach(item=>{
    item.addEventListener('click',event=>{
        if(event.target.className==="button1"){
            clearInputFields(item);
        }
    })
})

function clearsubfields(item){
    let itemChildren = item.children;
    let item1 = itemChildren[1].children;
    let item2 = itemChildren[2].children;
    
    if(item1[1].checked){
        item1[1].checked=false; 
    }
    if(item2[1].checked){
        item2[1].checked=false; 
    }
}

field2QueryList.forEach(item=>{
    item.addEventListener('click',event=>{
        if(event.target.className==="button1"){
            clearsubfields(item);
        }
    })
})

