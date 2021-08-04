import React from 'react';
import './Diarycard.css'
import { useState } from 'react';

function Card({ title, subTitle, body, color }) {
  const [readMore, setReadMore] = useState(false);
  var content = body;
  const extraContent = <div>
    <p className="extra-content">
      {content.substring(100, content.length)}
    </p>
  </div>
  const linkName = readMore ? 'Read Less << ' : 'Read More'
  return (
    <div className='card-container' style={{ backgroundColor: color }}>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-subtitle'>
        <h5>{subTitle}</h5>
      </div>
      <div className='card-body'>
        <p>{content.substring(0, 100)}{readMore && extraContent}<a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a></p>

        {/* {readMore && extraContent} */}
      </div>

    </div>
  )
}

export default Card
