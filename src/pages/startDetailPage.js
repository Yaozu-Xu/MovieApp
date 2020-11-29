import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { getStarDetail } from '../api/tmdb-api'

const leftStyle = {
  position: 'fixed',
  left: '1rem',
  fontSize: '2rem',
  color: 'grey',
  top: '50%',
}

const rightStyle = {
  position: 'fixed',
  right: '1rem',
  fontSize: '2rem',
  color: 'grey',
  top: '50%',
}

const StarDetailPage = (props) => {
  const { id } = props.match.params
  const [starDetail, setStarDetail] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await getStarDetail(id)
      setStarDetail(res)
      setLoaded(true)
    }
    fetchData()
  }, [id])
  return (
    loaded && (
      <div className="container-main">
        <Link to={'/people/' + (starDetail.id - 1)}>
          <LeftOutlined style={leftStyle} />
        </Link>
        <Link to={'/people/' + (starDetail.id + 1)}>
          <RightOutlined style={rightStyle} />
        </Link>

        <Card
          className="m-auto"
          hoverable
          style={{ width: 240 }}
          cover={<img alt="star" src={'https://image.tmdb.org/t/p/w500/' + starDetail.profile_path} />}
        >
          <Card.Meta title={starDetail.name} description={starDetail.biography} />
          <br />
          <Card.Meta title={starDetail.birthday} description={starDetail.place_of_birth} />
        </Card>
      </div>
    )
  )
}

export default StarDetailPage
