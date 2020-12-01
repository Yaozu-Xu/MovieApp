import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Drawer, Button, Row, Avatar } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { getStarDetail } from '../../api/tmdb-api'
import './index.scss'

const SavedDrawer = (props) => {
  const [visible, setVisible] = useState(false)
  let savedStars = useSelector((state) => state.star.stars)
  savedStars.map(async (star, key) => {
    const res = await getStarDetail(star.id)
    savedStars[key]['profile'] = 'https://image.tmdb.org/t/p/w500' + res.profile_path
  })

  return (
    <>
      <Button
        shape="circle"
        className="toggle-btn"
        icon={<PlusOutlined />}
        onClick={() => setVisible(true)}
        size="large"
        data-test="toggle-btn"
      />
      <Drawer title="Saved Stars" placement="left" closable={false} onClose={() => setVisible(false)} visible={visible} data-test="side-drawer">
        {savedStars.map((star) => (
          <Row key={star.id} className="saved-container" data-test="star-container">
            <Avatar src={star.profile} size="large"></Avatar>
            <span className="label-container">{star.name}</span>
          </Row>
        ))}
      </Drawer>
    </>
  )
}

export default SavedDrawer
