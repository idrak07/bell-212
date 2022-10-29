import Paginate from 'react-paginate'
import './QuestionPagination.css'

const QuestionPaginate = ({
  pageCount,
  onPageChange
}) => {
  return (
      <Paginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        breakLabel={"..."}
        nextLabel="&rarr;"
        previousLabel="&larr;"
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
  )
}

export default QuestionPaginate