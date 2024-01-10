import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-indigo-900 m-0 p-5'>
    <div className='px-4  pt-5 pb-4 rounded-lg bg-sky-100 m-auto w-1/3 relative border border-slate-100 shadow-[0_2px_4px_rgba(57,62,86,0.5)] '>
      <div className="flex flex-col min-h-full justify-center">
        <div className='m-auto'>
          <img src="https://www.osmoze.in/images/Osmoze.svg" alt="" />
        </div>
        <div className="mx-auto w-full max-w-md">
          <h2 className='mt-4 text-center text-black text-4xl font-[500]'>
            OSMOZE'<span className='text-blue-800'>24</span>
          </h2>
        </div>
      </div>
      <div className="mt-8 mx-auto w-full max-w-md">
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className='block text-md'>
              FIRST NAME
            </label>
            <div className="mt-1">
              <input type="text" name="name" id="name" placeholder="Name" required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div>
            
          </div>
          <div>
            <label htmlFor="name" className='block text-md'>
              LAST NAME
            </label>
            <div className="mt-1">
              <input type="text" name="name" id="name" placeholder="Name" required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div>
            
          </div>
          <div>
            <label htmlFor="email" className='block text-md'>
              EMAIL
            </label>
            <div className="mt-1">
              <input type="email" name="email" id="email" placeholder='Email' autoComplete='email' required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div>
          </div>
          <div >
            <label htmlFor="phoneNumber" className='block text-md'>
            PHONE NUMBER
            </label>
            <div className="mt-1">
              <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div>
          </div>
          <div>
            <label htmlFor="branch" className='block text-md'>
              BRANCH
            </label>
            <div className="mt-1">
              <input type="text" name="branch" id="branch" placeholder="Chemical Engineering" required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div> 
            
          </div>
          <div>
            <label htmlFor="password" className='block text-md'>
              PASSWORD
            </label>
            <div className="mt-1">
              <input type="password" id="password" name="password" placeholder='Password' required className='block appearance-none w-full rounded-md text-black bg-neutral-100 border border-stone-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-purple-200 focus:drop-shadow-input/18 text-sm'/>
            </div> 
            
          </div>
          <div>
          <button type="submit" className='flex py-2 mx-auto px-4 text-base font-medium w-1/2 justify-center rounded-md border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 hover:text-[1.05rem] focus:outline-none focus:ring-2 focus:right-indigo-500 focus-ring-offset-2' >Sign Up</button>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
