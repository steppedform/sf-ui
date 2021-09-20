class licenseService {
  constructor() {
    this.licCheck = async (salt) => {
      const textToChars = text => text.split('').map(c => c.charCodeAt(0));
      const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
      return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
    };
    this.prefixCheck = async (str, word) => {
      return str.lastIndexOf(word, 0) === 0;
    };
    this.licMsg = async (licArray, resType) => {
      let licChecked = false;
      let licType = '';
      let ctr = 0;
      for (const lic of licArray) {
        const licVal = await this.prefixCheck(resType, lic);
        if (licVal) {
          licChecked = true;
          licType = lic;
        }
        ctr++;
        if (ctr === licArray.length) {
          const checks = await this.checkValidation(licChecked, resType, licType);
          if (checks) {
            return checks;
          }
        }
      }
    };
    this.checkValidation = async (licChecked, resType, licType) => {
      if (licChecked === true) {
        const checkResult = await this.isValidTrial(resType, licType);
        if (checkResult) {
          return true;
        }
      }
      else {
        this.outputInvalidLicenseKey();
        return false;
      }
    };
    this.extractExpiry = async (dataRef) => {
      const resHashed = dataRef.substring(dataRef.lastIndexOf('_') + 1, dataRef.length);
      const hash = +(new Date(parseInt(resHashed, 10)));
      return hash;
    };
    this.isValidTrial = async (dataRef, lic) => {
      const licDate = dataRef.substring(dataRef.lastIndexOf('_') + 1, dataRef.length);
      const expDate = new Date(licDate);
      const today = new Date();
      if (lic == 't') {
        if (licDate && licDate.length >= 8) {
          if (expDate < today) {
            this.outputExpiredTrialKey(licDate);
            return false;
          }
          else {
            return true;
          }
        }
        else {
          this.outputInvalidLicenseKey();
          return false;
        }
      }
      else if (lic == 'p' || lic == 'te' || lic == 'e') {
        const licKey = await this.extractExpiry(dataRef);
        if (!licKey || licKey > 13) {
          this.outputInvalidLicenseKey();
          return false;
        }
        else {
          return true;
        }
      }
      else {
        this.outputMissingLicenseKey();
        return false;
      }
    };
    this.outputInvalidLicenseKey = async () => {
      console.error('*****************************************************************************************************************');
      console.error('***************************************** steppedForm License ********************************************');
      console.error('********************************************* Invalid License ***************************************************');
      console.error('* Your license for steppedForm is not valid - please contact hi@steppedform.com to obtain a valid license. *');
      console.error('*****************************************************************************************************************');
      console.error('*****************************************************************************************************************');
    };
    this.outputExpiredTrialKey = async (expDate) => {
      console.error('****************************************************************************************************************');
      console.error('***************************************** steppedForm License *******************************************');
      console.error('*****************************************   Trial Period Expired.    *******************************************');
      console.error("* Your license for steppedForm expired on " + expDate + ". *");
      console.error('* Please email hi@steppedform.com to purchase a license. *');
      console.error('****************************************************************************************************************');
      console.error('****************************************************************************************************************');
    };
    this.outputMissingLicenseKey = async () => {
      console.error('****************************************************************************************************************');
      console.error('***************************************** steppedForm License *******************************************');
      console.error('****************************************** License Key Not Found ***********************************************');
      console.error('* All steppedForm features are unlocked. *');
      console.error('* This is an evaluation only version, it is not licensed for development projects intended for production. *');
      console.error('****************************************************************************************************************');
      console.error('****************************************************************************************************************');
    };
    this.licProcess = async (license) => {
      if (license) {
        // Validate the type
        const licData = license;
        let whatType = await this.licCheck('282429536481');
        let resType = whatType(licData);
        // Type list
        const lt = ['t', 'p', 'te', 'e'];
        return await this.licMsg(lt, resType);
      }
      else {
        this.outputMissingLicenseKey();
        return false;
      }
    };
  }
}
const licService = new licenseService();

export { licService as l };
