class validationService {
  constructor() { }
  isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
  }
  creditCardType(cc) {
    let amex = new RegExp('^3[47]0-9]{2}.*$');
    let visa = new RegExp('^4[0-9]{3}.*$');
    let cup1 = new RegExp('^62[0-9]{2}.*$');
    let cup2 = new RegExp('^81[0-9]{2}.*$');
    let mastercard = new RegExp('^5[1-5][0-9]{2}.*$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{2}.*$');
    let disco1 = new RegExp('^6011.*$');
    let disco2 = new RegExp('^62[24568][0-9].*$');
    let disco3 = new RegExp('^6[45][0-9]{2}.*$');
    let diners = new RegExp('^3[0689][0-9]{2}.*$');
    let jcb = new RegExp('^35[0-9]{2}.*$');
    return (visa.test(cc)) ? 'visa' : (amex.test(cc)) ? 'amex' : (mastercard.test(cc) || mastercard2.test(cc)) ? 'mastercard' : (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) ? 'discover' : (diners.test(cc)) ? 'dinners' : (jcb.test(cc)) ? 'jcb' : (cup1.test(cc) || cup2.test(cc)) ? 'unionpay' : undefined;
  }
  isValidCVV(cvv) {
    const validCVV = new RegExp('^[0-9]{3,4}$');
    return validCVV.test(cvv);
  }
  isDateValid(date) {
    let formattedDate = this.getFullDate(date);
    let exMonth = formattedDate.exMonth;
    let matchDate = formattedDate.matchDate;
    let exYear = formattedDate.exYear;
    let today = formattedDate.today;
    let fullCardDate = formattedDate.fullCardDate;
    let expiration;
    (exMonth && exYear) ? expiration = fullCardDate : null;
    let validation, formDate;
    (!expiration || (expiration < today)) ? validation = false : validation = true;
    (exMonth && exYear) ? formDate = matchDate[1] + '/' + matchDate[2] : '';
    return { newDate: formDate, validation };
  }
  isCardValid(cardNumber) {
    const cleanCardNumber = cardNumber.replace(/[^0-9]/g, '');
    const validCardNumberFormat = new RegExp('^(\\d{4})\\/?(\\d{4})\/?(\\d{4})\/?(\\d{4})$');
    let matchCardNumber = cleanCardNumber.match(validCardNumberFormat);
    let slot1 = (matchCardNumber && matchCardNumber[1]) ? +matchCardNumber[1] : null;
    let slot2 = (matchCardNumber && matchCardNumber[2]) ? +matchCardNumber[2] : null;
    let slot3 = (matchCardNumber && matchCardNumber[3]) ? +matchCardNumber[3] : null;
    let slot4 = (matchCardNumber && matchCardNumber[4]) ? +matchCardNumber[4] : null;
    let formCardNumber, validation;
    (slot1 && slot2 && slot3 && slot4) ? validation = true : validation = false;
    (slot1 && slot2 && slot3 && slot4) ? formCardNumber = matchCardNumber[1] + '-' + matchCardNumber[2] + '-' + matchCardNumber[3] + '-' + matchCardNumber[4] : '';
    return { newCardNumber: formCardNumber, validation };
  }
  getFullDate(date) {
    const cleanDate = date.replace(/[^0-9]/g, '');
    const validDateFormat = new RegExp('^(0[1-9]|1[0-2])\/?([0-9]{2})$');
    const matchDate = cleanDate.match(validDateFormat);
    const exMonth = (matchDate && matchDate[1]) ? +matchDate[1] : null;
    const exYear = (matchDate && matchDate[2]) ? +('20' + matchDate[2]) : null;
    const today = new Date();
    const someday = new Date();
    const fullCardDate = new Date(someday.setFullYear(exYear, exMonth, 1));
    return { matchDate, exMonth, exYear, today, someday, fullCardDate };
  }
  compareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if (aCount !== bCount)
        return false;
    }
    return true;
  }
  inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled) {
    const checkValue = (label) && event && event.detail;
    (checkValue && (inputsChecked.indexOf(label) === -1)) ? inputsChecked.push(label) : null;
    const allInputsChecked = this.compareArrays(inputsChecked, inputLabels);
    (allInputsChecked) ? buttonDisabled = false : buttonDisabled = true;
    return { inputsChecked, buttonDisabled };
  }
}
const valService = new validationService();

export { valService as v };
