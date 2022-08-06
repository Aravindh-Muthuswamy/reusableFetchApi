/*
Custom Fetch API v0.0.1-alpha {typescript}
Reusable fetch api that can be used anywhere in the react application or other javascript applications
Methods
1. infomatGet(url, data :object)
2. infomatPost(url, data :object)
//helper functions
1. objToQueryString(data object: getRequest)
//Interfaces
1. getRequest
*/
export const infomatGet = async (url: string, data = {}) =>{
    const response = await fetch(url + `?${_objToQueryString(data)}`, {
        credentials: 'include'
    });
    if(response.ok){
        return response.json();
    }
}

export const infomatPost = async (url: string, data={}) =>{
    const response = await fetch(url, {
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(data)
    });
    if(response.ok){
        return await response.json();
    }
}

interface getRequest {
    [key: string]: number;
 }

function _objToQueryString(obj :getRequest) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}
