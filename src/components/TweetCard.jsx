import { useMemo } from 'react'
import { Heart } from 'lucide-react'

function timeAgo(ts) {
  const diff = Date.now() - ts
  const s = Math.floor(diff / 1000)
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d`
  const date = new Date(ts)
  return date.toLocaleDateString()
}

export default function TweetCard({ tweet, onToggleLike }) {
  const when = useMemo(() => timeAgo(tweet.timestamp), [tweet.timestamp])

  return (
    <article className="px-4 sm:px-0 py-4">
      <div className="flex gap-3">
        <img
          src={tweet.author.avatarUrl}
          alt={`${tweet.author.name} avatar`}
          className="h-10 w-10 rounded-full bg-zinc-200"
        />
        <div className="min-w-0 flex-1">
          <header className="flex items-baseline gap-2">
            <span className="truncate font-semibold">{tweet.author.name}</span>
            <span className="truncate text-sm text-zinc-500">@{tweet.author.handle}</span>
            <span className="text-sm text-zinc-400">· {when}</span>
          </header>
          <p className="mt-1 whitespace-pre-wrap break-words text-[15px] leading-relaxed text-zinc-800">
            {tweet.content}
          </p>
          <div className="mt-3 flex items-center gap-4 text-zinc-500">
            <button
              onClick={onToggleLike}
              className={`group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm transition-colors ${
                tweet.liked ? 'text-rose-600' : 'hover:text-rose-600'
              }`}
            >
              <Heart
                className={`h-4 w-4 transition-transform ${tweet.liked ? 'fill-rose-600 stroke-rose-600 scale-110' : ''}`}
              />
              <span className="tabular-nums">{tweet.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
