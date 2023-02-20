'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const FormPost = () => {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault()

    if (title.length < 1) {
      alert('please enter a title')
      return
    }

    const data = await fetch(`/api/createPost`, {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
    const res = await data.json()
    router.refresh()
    setTitle('')
  }

  return (
    <>
      <form className="mt-[5rem]" onSubmit={submitPost}>
        <input
          placeholder="Entry post title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="outline-none placeholder:text-neutral-700 w-full min-h-[5rem] bg-zinc-900 px-[3rem] py-[3rem text-neutral-300"
        />
        <button
          className="block mt-[3rem] bg-teal-500 text-white px-6 py-4 rounded-md"
          type="submit"
        >
          Make another post
        </button>
      </form>
    </>
  )
}

export default FormPost
