class DonationService{
    static list(limit, start, sort){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/donation?limit=${limit}&start=${start}&sort=${sort}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
    static getById(donationId){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/donation/${donationId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }