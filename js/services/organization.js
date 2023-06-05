class OrganizationService{
    static getOrganization(){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/organization`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    static getOptions(){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/organization/options`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
  }