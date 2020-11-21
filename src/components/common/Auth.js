import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from '../firebase'

const Auth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const subscriber = firebase.onAuthChanged((res) => {
      const { displayName, uid } = res
      dispatch({
        type: 'SET_USER',
        payload: {
          displayName,
          uid,
        },
      })
    })
    return () => subscriber
  })

  return <></>
}

export default Auth
