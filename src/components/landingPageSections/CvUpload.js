import React from 'react'
import uploader from '../../assets/uploader.png'

function CvUpload() {
  return (
    <div className='section4-main'>
     
      <div className='sub-main'>
        <div>
          <p className='main-text'>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</p>
          <p className='sub-text'>In the subject line of email, write your name, the description of the position you want to apply</p>
        </div>
        <div>
          <button className='up-btn'>
           <img src={uploader} alt='uploader'/>&nbsp; &nbsp;&nbsp;Upload your CV
          </button>
        </div>
      </div>

    </div>
  )
}

export default CvUpload
