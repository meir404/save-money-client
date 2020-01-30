import http from './http.service';

const Service = {};
Service.signUp = (data) => {
    return new Promise((resolve, reject) => {
        http.post('auth', { email: data.email, password: data.password }).then(s => {
            if (s.token) {
                window.localStorage.setItem(http.TokenName, s.token);
                resolve();
            } else {
                reject();
            }
        });
    });
};

Service.signIn = (data) => {
    return http.post('Auth/register',data);
};

export default Service;