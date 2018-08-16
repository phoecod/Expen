import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBWtsBEPzf1HIEj2Yo3DWIuQU9v5tuNwLc",
  authDomain: "expenso-9f94b.firebaseapp.com",
  databaseURL: "https://expenso-9f94b.firebaseio.com",
  projectId: "expenso-9f94b",
  storageBucket: "expenso-9f94b.appspot.com",
  messagingSenderId: "295974067256"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.val());
// });

// database.ref('expenses').on('child_changed', (data) => {
//   console.log(data.val());
//   console.log(data.key);
// });

// // const expenses = [
// //   {
// //     description: 'rent',
// //     note: 'november',
// //     amount: 600,
// //     createdAt: 40000
// //   },
// //   {
// //     description: 'movie',
// //     note: 'november',
// //     amount: 20,
// //     createdAt: 60000
// //   },
// //   {
// //     description: 'food',
// //     note: 'november',
// //     amount: 300,
// //     createdAt: 20000
// //   }
// // ]


// // expenses.forEach((exp) => {
// //   console.log(exp);
// //   database.ref('expenses').push(exp);
// // });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((snap) => {
//     expenses.push({
//       id: snap.key,
//       ...snap.val()
//     });
//   });
//   console.log(expenses)
// })