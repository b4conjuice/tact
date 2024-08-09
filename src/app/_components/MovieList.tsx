import { Button } from '@/components/ui'
import { getMyMovies } from '@/server/queries'

export default async function MovieList() {
  const movies = await getMyMovies()
  if (movies.length === 0) {
    return (
      <>
        <p>Your movie list is empty</p>
        <Button>Add a new movie</Button>
      </>
    )
  }
  return (
    <>
      <div className='flex'>
        <h1>My movies</h1>
        <Button>Add a new movie</Button>
      </div>
      <ul>
        {movies.map(movie => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}
