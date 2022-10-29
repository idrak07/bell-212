import React from 'react'
import CustomButton from '../../../../ui/CustomButton'
import YoutubeEmbed from '../../YoutubeEmbed'


function WatchTutorial({item, back}){
  return (
   <div>
     <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '1rem',
      overflow: 'auto'
    }}>
      <h2 style={{
        fontSize: '1.2rem'
      }}>Watch Tutorial - {item?.subject}</h2>
      <CustomButton
        style={{
          padding: '5px 14px'
        }} onClick={back}
      >
        Go Back
      </CustomButton>
    </div>
    <div style={{
      width: '100%'
    }}>
      <YoutubeEmbed url={item.link} />
    </div>
   </div>
  )
}

export default WatchTutorial