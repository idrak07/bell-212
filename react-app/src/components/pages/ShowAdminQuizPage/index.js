import AdminLayout from '../../layouts/AdminLayout';
import ShowAdminMockQuiz from '../../QuizComponents/ShowAdminQuiz';

const ShowAdminMockQuizPage = () => {
 

  return (
    <AdminLayout>
      <div style={{
        padding: '18px'
      }}>
        <ShowAdminMockQuiz />
      </div>
    </AdminLayout>
  )
}

export default ShowAdminMockQuizPage