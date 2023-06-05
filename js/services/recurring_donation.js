class RecurringDonationService{
    static list(limit, start, sort){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/recurring_donation?limit=${limit}&start=${start}&sort=${sort}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
    static getById(recurringDonationId){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/recurring_donation/${recurringDonationId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    static create(recurringDonation){
      const body = JSON.stringify(recurringDonation)
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/recurring_donation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
    }

    static inactivate(recurringDonationId){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/recurring_donation/${recurringDonationId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }