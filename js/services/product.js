class ProductService{
    static list(type=null){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/product?type=${type}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
  }