import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

function SelectDaysUi({ onSelectedOption }: any) {
  const [days, setDays] = useState<number>(3) // default is 3 days

  const increaseDays = () => {
    if (days < 10) setDays(days + 1)
  }

  const decreaseDays = () => {
    if (days > 1) setDays(days - 1)
  }

  const handleConfirm = () => {
    onSelectedOption(`${days} Days`) // still a string
  }

  return (
    <div className="p-4 bg-white rounded-2xl shadow flex flex-col items-center gap-4">
      <p className="text-gray-600 text-sm">
        Got it! And how many days are you planning for your trip?
      </p>
      <h2 className="text-lg font-semibold">How many days do you want to travel?</h2>

      <div className="flex items-center gap-6">
        <button
          onClick={decreaseDays}
          className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
        >
          <Minus className="text-purple-500" />
        </button>

        <span className="text-2xl font-bold">{days} Days</span>

        <button
          onClick={increaseDays}
          className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
        >
          <Plus className="text-purple-500" />
        </button>
      </div>

      <Button
        onClick={handleConfirm}
        className="bg-orange-500 hover:bg-orange-600"
      >
        Confirm
      </Button>
    </div>
  )
}

export default SelectDaysUi
