import { type Movie } from '@prisma/client'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui'
import { getMyMovies } from '@/server/queries'

function MovieCard({ title, year, poster }: Movie) {
  return (
    <div className='overflow-hidden rounded'>
      <img src={poster} alt={title} />
      <div className='flex flex-col gap-y-2 bg-cb-blue p-2'>
        <div className='text-lg'>{title}</div>
        <div>{year}</div>
      </div>
    </div>
  )
}

export default async function MovieList() {
  const movies = await getMyMovies()
  if (movies.length === 0) {
    return (
      <>
        <h1 className='text-2xl'>Your movie list is empty</h1>
        <span>
          <Button widthClassName='w-60'>Add a new movie</Button>
        </span>
      </>
    )
  }
  return (
    <>
      <div className='flex w-full gap-x-3'>
        <h1 className='text-2xl'>My movies</h1>
        <button className='text-brand-green transition hover:text-brand-green/75'>
          <PlusCircleIcon className='h-6 w-6' />
        </button>
      </div>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {movies.map(movie => (
          <li key={movie.title}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>
    </>
  )
}
