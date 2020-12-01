import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
    apiKey: Cypress.env("REACT_APP_API_KEY"),
    authDomain: Cypress.env("REACT_APP_AUTH_DOMAIN"),
    databaseURL: Cypress.env("REACT_APP_DATABASE_URL"),
    projectId: Cypress.env("REACT_APP_PROJECT_ID"),
    storageBucket: Cypress.env("REACT_APP_STORAGE_BUCKET"),
    messagingSenderId: Cypress.env("REACT_APP_MESSAGING_SENDER_ID"),
    appId: Cypress.env("REACT_APP_ID"),
    measurementId: Cypress.env("REACT_APP_MEASUREMENT_ID"),
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });