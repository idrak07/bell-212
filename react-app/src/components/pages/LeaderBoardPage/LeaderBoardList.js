
const LeaderBoardList = ({leaderBoardList}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem'
    }}>
      {
        leaderBoardList.map((item, idx) => (
          <div style={{
            padding: '1.2rem 2rem',
            borderRadius: '6px',
            background: `${item.bg}`
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '2rem',
              color: '#fff'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}>
                <div>{idx+1}</div>
                <div>{item.name}</div>
              </div>
              <div>{item.score}/{item.max}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LeaderBoardList