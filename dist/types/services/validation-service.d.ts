declare class validationService {
  constructor();
  isValidUSZip(sZip: string): boolean;
  creditCardType(cc: string): "visa" | "amex" | "mastercard" | "discover" | "dinners" | "jcb" | "unionpay";
  isValidCVV(cvv: string): boolean;
  isDateValid(date: any): {
    newDate: any;
    validation: any;
  };
  isCardValid(cardNumber: any): {
    newCardNumber: any;
    validation: any;
  };
  getFullDate(date: any): {
    matchDate: any;
    exMonth: number;
    exYear: number;
    today: Date;
    someday: Date;
    fullCardDate: Date;
  };
  compareArrays(a: any, b: any): boolean;
  inputChecked(label: any, event: any, inputsChecked: any, inputLabels: any, buttonDisabled: any): {
    inputsChecked: any;
    buttonDisabled: any;
  };
}
export declare const valService: validationService;
export {};
