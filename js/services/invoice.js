class InvoiceService {
    static add(invoice){
        const invoice_body = JSON.stringify(invoice);
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/invoice`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: invoice_body
        })
    }
}