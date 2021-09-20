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
export const themeSer = new themeService();
