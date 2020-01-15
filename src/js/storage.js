 //Pass in JSON. key is in string format
 const saveToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

//key as string
const readFromLocalStorage = (key) => {
  JSON.parse(window.localStorage.getItem(key));
}