import AdminLayout from '../../layouts/AdminLayout';
import ShowAdminQuiz from '../../QuizComponents/ShowAdminQuiz';

const ShowAdminQuizPage = () => {
 

  return (
    <AdminLayout>
      <div style={{
        padding: '18px'
      }}>
        <ShowAdminQuiz />
      </div>
    </AdminLayout>
  )
}

export default ShowAdminQuizPage