class PaymentService {
    static add(payment){
        const payment_body = JSON.stringify(payment);
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/payment`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: payment_body
        })
    }
}