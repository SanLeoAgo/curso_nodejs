
global.criarError = function criarError(error) {
    let obj = {
        error: error.message
    }
    return obj;
};