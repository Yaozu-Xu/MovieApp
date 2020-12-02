import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.auth = app.auth()
    this.db = app.firestore()
  }

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  onAuthChanged = (callback) => this.auth.onAuthStateChanged(callback)

  checkLogin = () => this.auth.currentUser

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password)

  // Db functions

  createStarsDocument = (uid, star) =>
    this.db.collection('User').doc(uid).set({
      stars: [star],
    })

  pushStarsDocument = (uid, star) => this.db.collection('User').doc(uid).get().then(
    doc => {
      if (doc.exists) {
        this.db.collection('User').doc(uid).update({
          stars: firebase.firestore.FieldValue.arrayUnion(star)
        })
      } else {
        this.createStarsDocument(uid, star)
      }
    }
  )

  removeStar = (uid, star) => this.db.collection('User').doc(uid).get().then(
    doc => {
      if (doc.exists) {
        this.db.collection('User').doc(uid).update({
          stars: firebase.firestore.FieldValue.arrayRemove(star)
        })
      }
    })

  getSavedStar = (uid) => this.db.collection('User').doc(uid).get()
}

export default new Firebase()