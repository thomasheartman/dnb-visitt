/*
 * Created by Thomas Hartmann
 * A file containing the default configuration for the database
 */
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDheiLwH9ZwX9EXeZ_b6M8cq3drC-ogCOo',
  authDomain: 'dnb-visitt.firebaseapp.com',
  databaseURL: 'https://dnb-visitt.firebaseio.com',
  projectId: 'dnb-visitt',
  storageBucket: 'dnb-visitt.appspot.com',
  messagingSenderId: '1091924579708'
}

export const firebaseapp = firebase.initializeApp(config)

export const database = firebaseapp.database()
