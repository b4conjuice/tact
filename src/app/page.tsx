import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Main } from '@/components/ui'
import { Button } from '@/components/ui'
import MovieList from './_components/MovieList'
import Username from './_components/Username'

function SignIn() {
  return (
    <div className='flex flex-col gap-y-4'>
      <SignedOut>
        <h1 className='text-center text-2xl'>Sign in</h1>
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className='flex items-center space-x-2 text-cb-white'>
          <Username />
          <UserButton />
        </div>
      </SignedIn>
      {/* <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <label className='flex items-center justify-center gap-x-2'>
        <input type='checkbox' />
        Remember me
      </label>
      <button className='bg-green-500'>Login</button> */}
    </div>
  )
}

export default function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <SignIn />
        <SignedIn>
          <MovieList />
        </SignedIn>
      </div>
    </Main>
  )
}
