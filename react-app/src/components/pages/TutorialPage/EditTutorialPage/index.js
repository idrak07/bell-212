import React from 'react'
import CustomButton from '../../../../ui/CustomButton'
import SingleTutorialComponent from '../SingleTutorialComponent'

const EditTutorialPage = ({item, back}) => {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1rem'
      }}>
        <h2 style={{
          fontSize: '1.2rem'
        }}>Edit Tutorial Tutorial</h2>
        <CustomButton 
          style={{
            padding: '5px 14px'
          }} onClick={back}>
          Go Back
        </CustomButton>
      </div>

      <div>
          <SingleTutorialComponent isEdit={true} item={item} back={back}/>
      </div>
    </div>
  )
}

export default EditTutorialPage