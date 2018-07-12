import App from './components/App.html';

const main = document.querySelector('main')
if(main.id === "dashboard"){
  const app = new App({
  	target: main,
  });
}