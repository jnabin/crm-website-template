class AddressService{
    static getAddress(address, limit){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/address/searchasyoutype?address=${encodeURIComponent(address)}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    static getGoogleAddress(address){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/address/google/searchasyoutype?address=${encodeURIComponent(address)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    static getGooglePlaceDetails(placeId){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/address/google/place/${placeId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
}