//imports functions from index.js
import pkg from "./index.cjs";
const { generateUniqueID, addAccount } = pkg;

//calls the functions from index.js
addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]);
addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]);
