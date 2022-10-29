import React, { useState } from 'react';
import { useParams } from 'react-router';
import { SERVER_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import CustomButton from '../../../ui/CustomButton';
import './TutorialPage.css';
import { predefinedChapters } from './TutorialVideo';

const SingleTutorialComponent = ({isEdit=false, item, back}) => {
  const params = useParams();
  const { topic } = params;
  const buttonText = isEdit ? 'Edit & Save' : 'Save'

  const [tutorialState, setTutorialState] = useState( isEdit ? item : {
    topic: topic.toUpperCase()?.replace(' ', '_'),
    chapter: 'CHAPTER_1',
    subject: '',
    link: ''
  })

  const handleChange = (e) => {
    setTutorialState({
      ...tutorialState,
      [e.target.name]: e.target.value
    })
  }

  const [{response, error, isLoading}, createTutorial] = useFetch(`${SERVER_URL}/tutorials`);
  const [{response:_, error:editError, isLoading:editLoading}, editTutorial] = useFetch(`${SERVER_URL}/tutorials`);
  const [{response:deleteRes, error:deleteErr, isLoading:deleteLoading}, deleteTutorial] = useFetch(`${SERVER_URL}/tutorials`);


  const handleSubmit =async (e) => {
    e.preventDefault();
    if(isEdit) {
      await editTutorial({
        method: 'PUT',
        data: {
          ...tutorialState
        }
      })
      if(editError) {
        alert('Error editing tutorial')
        return;
      }
      back()
    } else {
      await createTutorial({
        method: 'POST',
        data: {
          ...tutorialState
        }
      })
      if(error) {
        alert('Error creating tutorial')
        return;
      }
      back()
    }
  }

  const handleDeleteTutorial = async () => {
    await deleteTutorial({
      method: 'DELETE',
      params: {
        id: tutorialState.id
      }
    })
    if(deleteErr) {
      alert('Error deleting tutorial')
      return;
    }
    back();
  }

  return (
    <div >
      <form className='tutorialForm' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chapter">Select Chapter</label>
          <select
            name="chapter"
            id="chapter"
            onChange={handleChange}
            value={tutorialState.chapter}
            required
          >
            {
              predefinedChapters.map(chapter => (
                <option value={chapter.id}>
                  {chapter.name}
                </option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor="Subject Name">
            Subject Name
          </label>
          <input required placeholder='Enter subject name' onChange={handleChange}  value={tutorialState.subject} type="text" name="subject" id="subject" />
        </div>
        <div>
          <label htmlFor="url">Youtube video link</label>
          <input placeholder='Enter video link' onChange={handleChange}  value={tutorialState.link} required type="url" name="link" id="link" />
        </div>

        <div style={isEdit ? {
          display: 'flex',
          gap: '1.5rem',
          flexDirection: 'row'
        } : {
          display: 'flex'
        }}>
          {isEdit && (
            <CustomButton variant={'danger'} onClick={() => {
              const res = window.confirm('Are you sure, you want to delete the tutorial?');
              if(res) {
                handleDeleteTutorial();
              }
            }} type='button'>
              Delete
            </CustomButton>
          )}
          <CustomButton type='submit' >
            {buttonText}
          </CustomButton>
          
        </div>
      </form>
    </div>
  )
}

export default SingleTutorialComponent