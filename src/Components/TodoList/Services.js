const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': "application/json"
};

const url = 'https://repetitora.net/api/JS/Tasks';
const corsMode = 'cors';

function requestData(url, type, data) {
    return fetch(url, {
        method: type,
        body: data,
        headers: headers,
        mode: corsMode
    }).then(result => result.json())
}


export function createTask(title, widgetId) {
    const data = new URLSearchParams();
    data.append('widgetId', widgetId);
    data.append('title', title);

    return requestData(url, 'POST', data);
}

export function updateTask(taskId, widgetId, title, isDone) {
    const data = new URLSearchParams();
    data.append('taskId', taskId);
    data.append('widgetId', widgetId);
    data.append('title', title);
    data.append('done', isDone);


    return requestData(url, 'PUT', data);
}

export function getTasks(widgetId) {
    let reqUrl = url + '?widgetId=' + widgetId + '&count=30';

    return requestData(reqUrl, 'GET')
}
