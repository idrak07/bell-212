import { useParams } from 'react-router';
import AdminLayout from '../../layouts/AdminLayout';
import TutorialVideo from './TutorialVideo';


const TutorialPage = () => {
  const params = useParams();
 
  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div>
          <h2 style={{
            marginBottom: '28px'
          }}>Tutorial</h2>
        </div>

        <div>
          <h4 style={{
            fontSize: '1.4rem',
            // borderBottom: '1px solid lightgrey',
            paddingBottom: '10px',
            borderBottom: '1px solid lightgrey',
            paddingBottom: '8px',
            marginBottom: '10px',
          }}>{params?.topic}</h4>
        </div>
        
        <TutorialVideo />
      </div>
    </AdminLayout>
  )
}

export default TutorialPage