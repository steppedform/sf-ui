'use strict';

class themeService {
  constructor() {
    this.checkTheme = async () => {
      const theme = await document.body.getAttribute('data-theme');
      if (!theme || (theme && theme !== 'dark' && theme !== 'light' && theme !== 'custom')) {
        await document.body.setAttribute('data-theme', 'light');
      }
    };
  }
}
const themeSer = new themeService();

exports.themeSer = themeSer;
