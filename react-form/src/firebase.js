import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDYblqrw6xGQvjML-O27nRCBX4mTO6_lz4",
    authDomain: "form-test-c793f.firebaseapp.com",
    databaseURL: "https://form-test-c793f.firebaseio.com",
    projectId: "form-test-c793f",
    storageBucket: "form-test-c793f.appspot.com",
    messagingSenderId: "565988305079"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

export {
  firebaseDB
}
