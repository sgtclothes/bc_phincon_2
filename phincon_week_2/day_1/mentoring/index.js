let obj = {
    name: "Danti",
    gender: "female",
    panggil: function (action) {
        return "Mba Danti " + action + " Anda";
    },
    masukKelas: () => {
        return {
            a: "b",
            class: ["Fullstack", "Android", "IOS"],
        };
    },
};

console.log(obj.masukKelas().a);
console.log(obj.panggil("coding"));
console.log(obj.masukKelas().class);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.id;
        // return this.firstName + " " + this.lastName;
    },
};
console.log(person.fullName());

function myFunction() {
    this.a = "b";
    return this;
}
console.log(myFunction());
console.log(1 / 0);