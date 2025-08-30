import { useState } from 'react'
import TopNav from './components/TopNav'
import Composer from './components/Composer'
import Feed from './components/Feed'

const initialTweets = [
  {
    id: crypto.randomUUID(),
    author: {
      name: 'Alice',
      handle: 'alice',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Alice'
    },
    content: 'Minimalism isn\'t about removing things you love. It\'s about removing the things that distract you from what you love.',
    timestamp: Date.now() - 1000 * 60 * 30,
    likes: 12,
    liked: false
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: 'Bob',
      handle: 'bob',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Bob'
    },
    content: 'Building a super minimal feed with React + Tailwind. Clean, calm, fast.',
    timestamp: Date.now() - 1000 * 60 * 60 * 5,
    likes: 33,
    liked: true
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: 'Charlie',
      handle: 'charlie',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Charlie'
    },
    content: 'Focus mode on. Ship small, ship often.',
    timestamp: Date.now() - 1000 * 60 * 60 * 27,
    likes: 5,
    liked: false
  }
]

export default function App() {
  const [tweets, setTweets] = useState(initialTweets)

  const addTweet = (text) => {
    const me = {
      name: 'You',
      handle: 'you',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=You'
    }
    const t = {
      id: crypto.randomUUID(),
      author: me,
      content: text.trim(),
      timestamp: Date.now(),
      likes: 0,
      liked: false
    }
    setTweets((prev) => [t, ...prev])
  }

  const toggleLike = (id) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, liked: !t.liked, likes: t.likes + (t.liked ? -1 : 1) }
          : t
      )
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav />
      <main className="mx-auto max-w-xl px-4 sm:px-0">
        <Composer onPost={addTweet} />
        <Feed tweets={tweets} onToggleLike={toggleLike} />
      </main>
      <footer className="py-8 text-center text-xs text-zinc-400">Built for a calm web.</footer>
    </div>
  )
}
