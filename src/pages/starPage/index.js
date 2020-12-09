import React, { useState } from 'react'
import { Button, List, Tooltip } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { HeartTwoTone, HeartFilled } from '@ant-design/icons'
import { getMovieStars } from '../../api/tmdb-api'
import firebase from '../../components/firebase'
import './index.scss'

import { useEffect } from 'react'

const StarPage = (props) => {
  const { page } = props.match.params
  const dispatch = useDispatch()
  const [starList, setStarList] = useState()
  const uid = useSelector((state) => state.user.uid)
  const savedStars = useSelector((state) => state.star)

  function ifSaved(id) {
    return savedStars.stars.filter((star) => star.id === id).length > 0
  }

  function renderSavedButton(item) {
    if (ifSaved(item.id)) {
      return (
        <Tooltip placement="top" title="Remove your star">
          <HeartFilled
            style={{ fontSize: '20px', color: 'red' }}
            onClick={() => unSaveStar({ id: item.id, name: item.name })}
          />
        </Tooltip>
      )
    } else {
      return (
        <Tooltip placement="top" title="Save your star">
          <HeartTwoTone
            twoToneColor="#eb2f96"
            style={{ fontSize: '20px' }}
            onClick={() => saveStar({ id: item.id, name: item.name })}
          />
        </Tooltip>
      )
    }
  }

  function saveStar(star) {
    if (!uid) {
      return false
    }
    firebase
      .pushStarsDocument(uid, star)
      .then((res) => {
        let { stars } = savedStars
        stars.push(star)
        const payload = { stars: stars }
        dispatch({
          type: 'SET_STAR',
          payload,
        })
      })
      .catch((err) => console.log(err))
  }

  function unSaveStar(star) {
    if (!uid) {
      return false
    }
    firebase
      .removeStar(uid, star)
      .then((res) => {
        const index = savedStars.stars.indexOf(star)
        let { stars } = savedStars
        stars.splice(index, 1)
        const payload = { stars: stars }
        dispatch({
          type: 'SET_STAR',
          payload,
        })
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getMovieStars(page)
      setStarList(res)
    }
    fetchData()
  }, [page])
  return (
    <div className="container-main">
      <div className="container-star">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={starList}
          renderItem={(item) => (
            <List.Item
              key={item.name}
              extra={
                <a href={'/people/' + item.id}>
                  <img
                    width={240}
                    height={300}
                    alt="logo"
                    src={'https://image.tmdb.org/t/p/w500/' + item.profile_path}
                  />
                </a>
              }
            >
              <List.Item.Meta
                title={
                  <div>
                    <a href={'/people/' + item.id} data-test="star-name">
                      <span className="container-name">{item.name}</span>
                    </a>     
                    <div className="container-popularity">{parseInt(item.popularity)}</div>
                    {renderSavedButton(item)}
                  </div>
                }
                description={item.birth}
              />
              {item.known_for.map((movie) => (
                <List.Item.Meta
                  key={movie.id}
                  title={
                    <div>
                      <a href={'/movies/' + movie.id}>{movie.title}</a>
                      <span className="title-detail">{movie.release_date}</span>
                    </div>
                  }
                  description={movie.overview}
                />
              ))}
            </List.Item>
          )}
        />
      </div>
      <Button shape="circle" type="primary" className="pagenation-btn-right">
        <a href={'/stars/' + (parseInt(page) + 1)}>{parseInt(page) + 1}</a>
      </Button>
      {page > 1 && (
        <Button shape="circle" type="primary" className="pagenation-btn-left">
          <a href={'/stars/' + (parseInt(page) - 1)}>{parseInt(page) - 1}</a>
        </Button>
      )}
    </div>
  )
}

export default StarPage
