import React, { useState } from 'react'
import { Button, List, Tooltip } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import { getMovieStars } from '../../api/tmdb-api'
import './index.scss'

import { useEffect } from 'react'

const StarPage = (props) => {
  const { page } = props.match.params
  const [starList, setStarList] = useState()
  useEffect(() => {
    async function fetchData() {
      const res = await getMovieStars(page)
      setStarList(res)
    }
    fetchData()
  }, [page])
  console.log(starList)
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
                <img width={240} height={300} alt="logo" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
              }
            >
              <List.Item.Meta
                title={
                  <div>
                    <a>{item.name}</a>
                    <div className="container-popularity">{parseInt(item.popularity)}</div>
                    <Tooltip placement="top" title="Save your star">
                      <HeartTwoTone  twoToneColor="#eb2f96" style={{fontSize: '20px'}}/>
                    </Tooltip>
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
      <Button shape="circle" type="primary" className="pagenation-btn">
        <a href={'/stars/' + (parseInt(page) + 1)}>{parseInt(page) + 1}</a>
      </Button>
    </div>
  )
}

export default StarPage
