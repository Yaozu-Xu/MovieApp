import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from '../firebase'

const Auth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const subscriber = firebase.onAuthChanged((res) => {
      if (res) {
        const { displayName, uid } = res
        dispatch({
          type: 'SET_USER',
          payload: {
            displayName,
            uid,
          },
        })
        firebase.getSavedStar(uid).then(doc => {
          if(doc.exists) {
            dispatch({
              type: 'SET_STAR',
              payload: doc.data()
            })
          }
        })
      }
    })
    return () => subscriber
  })

  return <> </>
}

export default Auth
