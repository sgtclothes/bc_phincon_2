let fragment = document.createDocumentFragment();

const students = ["Danty", "Rifqi", "Reza"];

for (let student in students) {
    let li = document.createElement("li");
    li.textContent = students[student];
    //     fragment.appendChild(li);
    document.getElementById("phincon").appendChild(li);
}

const image = document.getElementsByClassName("logo")[0];
console.log(image);

onresize = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
        image.style.width = "200px";
    } else {
        image.style.width = "500px";
    }
};
