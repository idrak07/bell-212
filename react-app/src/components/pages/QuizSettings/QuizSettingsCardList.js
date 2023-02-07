import React from 'react'
import AirplaneIcon from '../../DashboardUi/AirplaneIcon'
import DashboardCardItem from '../../DashboardUi/DashboardCardItem'
import RadioIcon from '../../DashboardUi/RadioIcon'

export const quizTopicLists = [
  {
    id: 1,
    name: 'Engine',
    description: 'An engine or motor is a machine designed to convert one form of energy into mechanical energy',
    link: '/quiz-settings/Engine',
    icon: "bi bi-gear-wide-connected"
  },
  {
    id: 2,
    name: 'Airframe',
    description: 'The mechanical structure of an aircraft is known as the airframe. Includes fuselage, undercarriage, empennage and wings.',
    link: '/quiz-settings/Airframe',
    iconComp: <AirplaneIcon />
  },
  {
    id: 3,
    name: 'Electric Components',
    description: 'The electrical systems, in most helicopters, reflect the increased use of sophisticated avionics and other electrical accessories.',
    link: '/quiz-settings/Electric Components',
    icon: 'bi bi-lightning-charge'
  },
  {
    id: 4,
    name: 'Instruments',
    description: 'The first prototype Bell 212 had an instrument flight rules (IFR) instrument kit with a large fin on the roof to change the aircraft’s turning operation.',
    link: '/quiz-settings/Instruments',
    icon: 'bi bi-sim'
  },
  {
    id: 5,
    name: 'Radio',
    description: 'The instrument flight rules (IFR) avionics system includes twin allied signal KTR 908 720-channel, very-high-frequency transceivers etc.',
    link: '/quiz-settings/Radio',
    iconComp: <RadioIcon />
  }
]

const QuizSettingsCardList = () => {
  return (
    <div style={{display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))'}}>
        {quizTopicLists.map(subject => (
            <DashboardCardItem isQuiz={true} key={subject.id} subject={subject} />
        ))}
    </div>
  )
}

export default QuizSettingsCardList