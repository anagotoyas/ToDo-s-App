import { Empty } from 'antd'
import React from 'react'

export const EmptyTodos = () => {
  return (
    <div className="mt-[10rem] w-full flex items-center justify-center"><Empty description="No hay ToDos" /></div>
  )
}
