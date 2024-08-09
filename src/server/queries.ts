import 'server-only'

import { auth } from '@clerk/nextjs/server'

import { db } from './db'

export async function getMyMovies() {
  const user = auth()

  if (!user.userId) {
    throw new Error('unauthorized')
  }

  try {
    const movies = await db.movie.findMany({
      where: {
        user: user.userId,
      },
    })
    return movies
  } catch (error) {
    console.error(error)
    return []
  }
}
