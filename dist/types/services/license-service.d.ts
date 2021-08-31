declare class licenseService {
  constructor();
  licCheck: (salt: any) => Promise<(encoded: any) => any>;
  prefixCheck: (str: any, word: any) => Promise<boolean>;
  licMsg: (licArray: any, resType: any) => Promise<boolean>;
  checkValidation: (licChecked: any, resType: any, licType: any) => Promise<boolean>;
  extractExpiry: (dataRef: any) => Promise<number>;
  isValidTrial: (dataRef: any, lic: any) => Promise<boolean>;
  outputInvalidLicenseKey: () => Promise<void>;
  outputExpiredTrialKey: (expDate: any) => Promise<void>;
  outputMissingLicenseKey: () => Promise<void>;
  licProcess: (license: any) => Promise<boolean>;
}
export declare const licService: licenseService;
export {};
