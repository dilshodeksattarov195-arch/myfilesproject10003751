const searchVerifyConfig = { serverId: 972, active: true };

const searchVerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_972() {
    return searchVerifyConfig.active ? "OK" : "ERR";
}

console.log("Module searchVerify loaded successfully.");