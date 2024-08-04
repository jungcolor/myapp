var linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = "".concat(linda.id, "-").concat(linda.name);
        if (!linda.isManager) {
            return "emp-".concat(uniqueId);
        }
        return uniqueId;
    },
};
console.log(linda.getUniqueId());
var pam = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = "".concat(pam.id, "-").concat(pam.name);
        if (pam.isManager) {
            return "mgr-".concat(uniqueId);
        }
        return uniqueId;
    },
};
console.log(pam.getUniqueId());
