function isEmpty(data) {
    if (!data) {
        return[];
    }

    return data;
}

function requestSuccess(message, isCreate = false, data = null) {
    if (data) {
        return {
            code: isCreate ? 201 : 200,
            message,
            data
        };
    } else {
        return {
            code: 200,
            message,
        };
    }
}

function requestFail(message) {
    return {
        code: 400,
        message
    };
}

module.exports = {
    isEmpty,
    requestSuccess,
    requestFail
}