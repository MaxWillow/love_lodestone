export function setLocal({ isLogin, token }) {
  const settings = { isLogin: isLogin, token: token };
  localStorage.setItem('Login', JSON.stringify(settings));
}
export function getLocal() {
  const savedSettings = localStorage.getItem('Login');
  const parsedSettings = JSON.parse(savedSettings);

  return parsedSettings;
}
export function removeLocal() {
  localStorage.removeItem('Login');
}
export function verificationLocal() {
  if(getLocal()===null){
    setLocal({ isLogin:false})
  }
}
