import React from 'react'
import { useState, useEffect } from 'react'

function Time({data, setData}) {
  return (
      <div className="space-y-6">
      {/* First Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Start time: 
        </label>
        <input
        onChange={(e) => setData({...data, starttime: e.target.value})}
        value={data.starttime}
          type="text"
          id="starttime"
          name='starttime'
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Last Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          End time: 
        </label>
        <input
        onChange={(e) => setData({...data, endtime: e.target.value})}
        value={data.endtime}
          type="text"
          id="endtime"
          name='endtime'
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Address Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Notes(if available): 
        </label>
        <textarea
        onChange={(e) => setData({...data, notes: e.target.value})}
        value={data.notes}
          id="notes"
          name='notes'
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}

export default Time
