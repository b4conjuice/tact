import { Main } from '@/components/ui'
import SignIn from './_components/SignIn'

export default function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <SignIn />
      </div>
    </Main>
  )
}
