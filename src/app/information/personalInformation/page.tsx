import {Mail,Phone,Linkedin,Github} from 'lucide-react'

export const metadata = {
  title: 'Personal Information',
}

export default async function Settings() {
  return(
    <div className='text-[#8F8CA8] mt-3 ml-5'>
      <div className='flex p-3'>
        <Mail/> <p className='px-2'><a href="mailto:rafael.rbrito45@gmail.com">rafael.rbrito45@gmail.com</a></p>
      </div>
       
      <div className='flex p-3'>
        <Phone/> <a className='px-2' href="https://wa.me/5511984032956">(11)984032945</a>
      </div>

      <div className='flex p-3'>
        <Linkedin/> <a className='px-2' href="https://www.linkedin.com/in/rafael-brito-29a0b41a8/">https://www.linkedin.com/in/rafael-brito-29a0b41a8/</a>
      </div>
      
      <div className='flex p-3'>
        <Github/> <a className='px-2' href='https://www.github.com/rafaelbrito45'>https://www.github.com/rafaelbrito45</a>
      </div>
    </div>
  )
}