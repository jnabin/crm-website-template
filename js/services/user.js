class UserService{
  static checkToken(){
    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user/check-token`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  static checkUser(organization_id, email=null, phone=null){
    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user?organization_id=${organization_id}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  static sendCode(organization_id, value, type){
    let body = JSON.stringify({
      organization_id,
      value,
      by_email: type == 'email' || false,
      by_sms: type == 'sms' || false
    })
    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user/code`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
  }

  static login(organization_id, user, code, value){
    let body = JSON.stringify({
      organization_id,
      user,
      code,
      value
    })

    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
  }

  static validateCode(organization_id, code, value){

    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user/validate-code?value=${value}&code=${code}&organization_id=${organization_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  static update(contact){
    let body = JSON.stringify(contact)
    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
  }

  static logout(){
    return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/user/logout`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}