import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

function SelectDaysUi({ onSelectedOption }: any) {
  const [days, setDays] = useState<number>(3)

  const increaseDays = () => {
    if (days < 14) setDays(days + 1)
  }

  const decreaseDays = () => {
    if (days > 1) setDays(days - 1)
  }

  const handleConfirm = () => {
    onSelectedOption(`${days} Days`)
  }

  return (
    <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow flex flex-col items-center gap-3 sm:gap-4">
      <p className="text-gray-600 text-xs sm:text-sm text-center">
        Got it! And how many days are you planning for your trip?
      </p>
      <h2 className="text-base sm:text-lg font-semibold text-center">How many days do you want to travel?</h2>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={decreaseDays}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center"
        >
          <Minus className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <span className="text-xl sm:text-2xl font-bold">{days} Days</span>

        <button
          onClick={increaseDays}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center"
        >
          <Plus className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <Button
        onClick={handleConfirm}
        className="bg-orange-500 hover:bg-orange-600 text-sm sm:text-base"
      >
        Confirm
      </Button>
    </div>
  )
}

export default SelectDaysUi