class AuthInterceptor {
    static makeApiRequest(url, options){
        //Add token to authorization
        options.headers.Authorization = sessionStorage.getItem('accessToken');
        options.credentials = 'include';
        return fetch(url,options).then((response) => {
            //The token is invalid
            if(response.status == 401){
                //Make a request to the API to refresh the token
                return fetch(`${Environment.API_URL}/user/refresh-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: sessionStorage.getItem('logged')
                    }),
                    credentials: 'include'
                }).then((response) => response.json())
                .then(data => {
                    if(data.accessToken){
                        // Update the access token and retry the original request
                        let accessToken = data.accessToken;
                        sessionStorage.setItem('accessToken', accessToken);
                        options.headers.Authorization = `${accessToken}`;
                        return fetch(url, options);
                    } else{
                        //If not already at the login page, redirect
                        let pathParts = window.location.pathname.split('/')
                        if(pathParts[pathParts.length -1] != 'login.html')
                            location.replace('/login/login.html');
                    }
                })
                .catch(error => {
                    //Redirect the user to login
                    //If not already at the login page, redirect
                    let pathParts = window.location.pathname.split('/')
                    if(pathParts[pathParts.length -1] != 'login.html')
                        location.replace('/login/login.html');
                });
            }
            return response
        })  
    }
}


