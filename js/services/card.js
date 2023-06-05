class CardService {
    static list(limit, start, sort){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/card?limit=${limit}&start=${start}&sort=${sort}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    static getById(cardId){
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/card/${cardId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    static edit(cardId, card){
        const body = JSON.stringify(card)
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/card/${cardId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        })
    }

    static create(card){
        const body = JSON.stringify(card)
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/card`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        })
    }

    static delete(cardId){
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/card/${cardId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }
}