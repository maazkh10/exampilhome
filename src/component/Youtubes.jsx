import React from 'react'
import './youtube.css'
import  { Container,Row, Col} from 'reactstrap'
import Content_img from '../assets/content_img.jpg'
import { FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';


function youtubes() {
  const videoUrl = 'https://www.youtube.com/watch?v=Exo-QceXn64';
  const videoUrl2 = 'https://www.youtube.com/watch?v=juonKcuKtrw';
  const videoId = videoUrl.split('v=')[1];
  const VideoId = videoUrl2.split('v=')[1];
  return (
    <Container>
      <Row>
        <Col ig='6'>
          <div className='content'>
            <h1 className='titlw'>Revolution Your learning</h1>
            <p className='para'>Ace Your NEET preparations with carefully created notes,flashcards, video concept rtc prepared by NEET toppers. .</p>
          </div>
        </Col>
        <Col >
          <div className='Choose-img'>
          <YouTube videoId={videoId} width={640} height={360} />
          <YouTube className='vid' videoId={VideoId} width={640} height={50}  />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default youtubes