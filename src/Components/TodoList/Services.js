export function createTask(title, widgetId){
  const data = new URLSearchParams();
  data.append('widgetId', widgetId);
  data.append('title', title);

  return fetch('https://repetitora.net/api/JS/Tasks',
      {
        method: 'POST',
        body: data,
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'accept': "application/json"
        },
        mode: 'cors'
      }).then(result => result.json())
}
