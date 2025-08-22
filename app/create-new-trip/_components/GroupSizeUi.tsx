import React from 'react'

export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler in exploration',
        icon: '🛩️',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '⛵',
        people: '5 to 10 People'
    },
]

function GroupSizeUi({onSelectedOption}:any) {
  return (
    <div className='grid grid-cols-2 gap-2 items-center mt-1'>
        {SelectTravelesList.map((item,index)=>(
            <div key={index} className='p-2 sm:p-3 border rounded-xl sm:rounded-2xl bg-white hover:border-primary cursor-pointer text-center'
             onClick={()=>onSelectedOption(item.title+":"+item.people)}
            >
                <div className='text-2xl mb-1'>{item.icon}</div>
                <h2 className='text-sm sm:text-base font-medium'>{item.title}</h2>
                <p className='text-xs text-gray-500 mt-1 hidden xs:block'>{item.desc}</p>
            </div>   
        ))}
    </div>
  )
}

export default GroupSizeUi