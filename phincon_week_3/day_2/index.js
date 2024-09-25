const person = {
    name: "Sigit",
    phoneNumber: "085725363777",
    read: () => {
        console.log(person.name);
        console.log(person.phoneNumber);
    },
};

const methods = ["create", "read", "update", "delete"];
const User = {};
for (let method in methods) {
    User[method] = person[method];
}
person.read();
person["read"]();

