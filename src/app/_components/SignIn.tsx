export default function SignIn() {
  return (
    <div className='flex flex-col gap-y-4'>
      <h1 className='text-center text-2xl'>Sign in</h1>
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <label className='flex items-center justify-center gap-x-2'>
        <input type='checkbox' />
        Remember me
      </label>
      <button className='bg-green-500'>Login</button>
    </div>
  )
}
