import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AdminLayout from '../../layouts/AdminLayout'
import LeaderBoardList from './LeaderBoardList'

const dummyLeaderBoard = [
  {
    name: 'Jisan Mia',
    score: 20,
    max: 20,
  },
  {
    name: 'Ahsan Khan',
    score: 10,
    max: 20,
  },
  {
    name: 'Jack Man',
    score: 18,
    max: 20,
  },
  {
    name: 'Rayan Ronalds',
    score: 16,
    max: 20,
  },
  
]
const gradients = ['linear-gradient(to right, #8360c3, #2ebf91)', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)', 'linear-gradient(to right, #f7ff00, #db36a4)', 'linear-gradient(to left, #ff416c, #ff4b2b)', 'linear-gradient(to left, #11998e, #38ef7d)', 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)', 'linear-gradient(to right, #000000, #434343)']

const getRandomGrad = () => {
  return gradients[Math.floor(Math.random() * gradients.length)]
}

const LeaderBoardPage = () => {
  const params = useParams();
  const [leaderBoardList, setLeaderBoardList] = useState(dummyLeaderBoard.sort((a,b) => b.score-a.score).map(i => {
    return {
      ...i,
      bg: getRandomGrad()
    }
  }))
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    if(searchTerm.trim()) {
      setLeaderBoardList(leaderBoardList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setLeaderBoardList(dummyLeaderBoard.sort((a,b) => b.score-a.score).map(i => {
        return {
          ...i,
          bg: getRandomGrad()
        }
      }))
    }
  }, [searchTerm])

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
          }}>Leaderboard</h2>
        </div>

        <div>
          <h4 style={{
            fontSize: '1.4rem',
            // borderBottom: '1px solid lightgrey',
            paddingBottom: '10px',
          }}>{params?.topic}</h4>
        </div>
        <div style={{
            borderBottom: '1px solid lightgrey',
            paddingBottom: '8px',
            marginBottom: '10px'
        }}>
          <input style={{
            border: '1px solid lightgrey',
            padding: '8px 10px',
            borderRadius: '4px',
            outline: 'none'
          }} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search by name' type="text" name="search" id="" />
        </div>
        <LeaderBoardList leaderBoardList={leaderBoardList} />
      </div>
    </AdminLayout>
  )
}

export default LeaderBoardPage