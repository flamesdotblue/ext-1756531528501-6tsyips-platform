import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Composer({ onPost }) {
  const [text, setText] = useState('')
  const max = 280
  const remaining = max - text.length
  const disabled = text.trim().length === 0 || remaining < 0

  const submit = (e) => {
    e.preventDefault()
    if (disabled) return
    onPost(text)
    setText('')
  }

  return (
    <section className="border-b border-zinc-200">
      <form onSubmit={submit} className="flex gap-3 px-4 sm:px-0 py-4">
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=You"
          alt="Your avatar"
          className="h-10 w-10 rounded-full bg-zinc-200"
        />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            rows={2}
            className="w-full resize-none rounded-md border border-zinc-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300"
          />
          <div className="mt-2 flex items-center justify-end gap-3">
            <span className={`text-xs ${remaining < 0 ? 'text-red-500' : 'text-zinc-400'}`}>{remaining}</span>
            <button
              type="submit"
              disabled={disabled}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
            >
              <Plus className="h-4 w-4" />
              Post
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
