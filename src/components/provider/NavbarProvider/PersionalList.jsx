import React from 'react'

function PersionalList() {
  return (
    <div>            <ul className="font-medium text-dark text-sm p-3 flex flex-col gap-1">
    <li>Profile</li>
    <li>My board</li>
    <li>My Tasks</li>
    <hr className="mt-2" />
    <li className="text-gray-400">Logout</li>
  </ul></div>
  )
}

export default PersionalList