const input_field = document.getElementById("textbox");
const list_cont = document.getElementById("list-cont");
const add_btn = document.getElementById("js-add-btn");


add_btn.addEventListener("click", () => {

    if (input_field.value === "") {

        alert("Type Something In Field !");
        

    } else {

        let i = document.createElement("i");
        let li = document.createElement("li");

        i.classList.add("fa-solid");
        i.classList.add("fa-xmark");

        li.innerHTML = input_field.value;
        li.appendChild(i);

        list_cont.appendChild(li);
        input_field.value = "";
        SaveData();
    }

});


list_cont.addEventListener("click", (event) => {


    if(event.target.nodeName === "LI"){


       event.target.classList.toggle("checkbox");
       SaveData();

    }

    else if(event.target.nodeName === "I"){

        event.target.parentElement.remove();
        SaveData();

    }
    
    
}); 


function SaveData(){

    localStorage.setItem("task_data",list_cont.innerHTML);
}

function ShowData(){

    list_cont.innerHTML = localStorage.getItem("task_data");
}

ShowData(); 