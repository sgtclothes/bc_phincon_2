var test = "Testing";
test = "Hello";
console.log(test);
var names = ["Andy"];
console.log(names);
var setStatus = function (a, b) {
    return a;
};
console.log(setStatus({ name: "Sigit" }, 10));
var processMessage = function (msg) {
    switch (msg.kind) {
        case "SAVE":
            console.log(msg.jobId + " " + JSON.stringify(msg.data));
            break;
        case "RETRY":
            console.log(msg.jobId + " " + msg.attempts);
            break;
        case "DELETE":
            console.log(msg.jobId);
            break;
        case "ABORT":
            console.log(msg.jobId + " " + msg.reason);
            break;
        default:
            break;
    }
};
processMessage({
    kind: "SAVE",
    jobId: 123,
    data: { name: "Sigit" },
});
var request = function (req) {
    return req.jobId;
};
console.log(request({
    kind: "SUCCESSFULLY",
    jobId: 9000,
    reason: "Berhasil request data",
}));
function getEmployee(employee) {
    return employee;
}
console.log(getEmployee({ name: "Sigit", id: 1, card: 123 }));
function getNames(names) {
    return names;
}
getNames([true, "1"]);
var GetListNames = /** @class */ (function () {
    function GetListNames() {
        this.values = [];
    }
    GetListNames.prototype.getListNames = function () {
        return this.values;
    };
    GetListNames.prototype.setListName = function (name) {
        this.values.push(name);
    };
    return GetListNames;
}());
var listNames = new GetListNames();
listNames.setListName("Sigit");
listNames.setListName("Fauzan");
console.log(listNames.getListNames());
