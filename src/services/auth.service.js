import http from './http.service';

const Service = {};
Service.signUp = (data) => {
    return new Promise((resolve, reject) => {
        http.post('auth', { email: "meir400@gmail.com", password: "12346" }).then(s => {
            if (s.token) {
                window.localStorage.setItem(http.TokenName, s.token);
                http.get('user').then(s => {
                    console.log(s)
                    resolve();
                });
            } else {
                reject();
            }
        });
    });
};

Service.signIn = (body) => {

};

export default Service;