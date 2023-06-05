class MembershipService{
    static list(limit, start, sort){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/membership?limit=${limit}&start=${start}&sort=${sort}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    static getById(membershipId){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/membership/${membershipId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    static getTransactions(startDate, endDate){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/membership/transaction?from=${startDate}&to=${endDate}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }