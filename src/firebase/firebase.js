import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNSelqDlZqcZl-bMqX6CJxE5iS4RxtQWg",
    authDomain: "expensify-648f3.firebaseapp.com",
    databaseURL: "https://expensify-648f3.firebaseio.com",
    projectId: "expensify-648f3",
    storageBucket: "expensify-648f3.appspot.com",
    messagingSenderId: "907270001250",
    appId: "1:907270001250:web:a31fd9d80c03594583b73b",
    measurementId: "G-B4QFPWV05G"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

database.ref().set({
    name: 'mata',
    age: 22,
    location: {
        city: 'india'
    }
}).then(() => {
    console.log('data saved!')
}).catch((e) => {
    console.log('fail af', e);
})

database.ref('attributes').set({
    height: 169,
    weight: 65
}).then(() => {
    console.log('savedd')
}).catch((e) => {
    console.log('fail', e)
})

// database.ref('location/city').remove()
// .then(() => {
//     console.log('removed')
// }).catch((e) => {
//     console.log('cannot')
// })

database.ref('attributes').set(null);