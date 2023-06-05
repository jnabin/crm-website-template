class Utils {
  static validateEmail(mail)
  {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  }

  static hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }


  static formatCurrency(value){
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value)
  }

  static parsePhoneNumber(value){
    let phoneParts = value.split(';')
    let formattedPhone = ''
        try{
        const parsed = new libphonenumber.parsePhoneNumber(phoneParts[0] + phoneParts[1])
        formattedPhone = '+' + (parsed.countryCallingCode || '')  + ' ' + parsed.formatNational()
    }catch(e){
        formattedPhone = value.replace(/;/g, " ")
    }
    return formattedPhone
  }

  static debounce(func, delay) {
    let timerId;
    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(func, delay);
    };
  }
  
  static checkUrlExpired(url){
    const urlParams = new URLSearchParams(url);
    const reqDate = urlParams.get('X-Amz-Date');
    const expDate = urlParams.get('X-Amz-Expires')
    return moment(reqDate).add(expDate, 'seconds').diff(moment()) <= 0
  }

}
