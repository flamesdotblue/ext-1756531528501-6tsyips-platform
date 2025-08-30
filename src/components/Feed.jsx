import TweetCard from './TweetCard'

export default function Feed({ tweets, onToggleLike }) {
  if (!tweets?.length) {
    return (
      <div className="px-4 sm:px-0 py-8 text-center text-sm text-zinc-500">No posts yet.</div>
    )
  }
  return (
    <section>
      <ul>
        {tweets.map((t) => (
          <li key={t.id} className="border-b border-zinc-200">
            <TweetCard tweet={t} onToggleLike={() => onToggleLike(t.id)} />
          </li>
        ))}
      </ul>
    </section>
  )
}
