

const apiUrl = "https://localhost:44362/api/";
const TokenName = "token";

const post = (url, data, header) => {
    console.log(GenerateHeaders({ token: 123 }));
    return fetch(`${apiUrl}${url}`, {
        method: 'post',
        headers: GenerateHeaders(header),
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    });
}
const get = (url,params, header) => {
    return fetch(`${apiUrl}${url}${Array.isArray(params) ? ('?' + params.map(p=> p.text + "=" + p.value ).join('&')):''}`, {
        method: 'Get',
        headers: GenerateHeaders(header),
    });
}
const GenerateHeaders = (header) => {
    let headers = {
        'Content-Type': 'application/json',
    };
    if (header)
        Object.assign(headers, header);
    let token = window.localStorage.getItem(TokenName);
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
}
export default {
    post, get, TokenName
}

