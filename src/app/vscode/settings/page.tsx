import { GistContent } from '@/components/GistContent'
import {Mail,Phone,Linkedin} from 'lucide-react'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  return(
    <div className='text-[#8F8CA8] mt-3'>
      <div className='flex'>
        <Mail/> <p className='px-2'>rafael.rbrito45@gmail.com</p>
      </div>
       
      <div className='flex'>
        <Phone/> <p className='px-2'>(11)984032945</p>
      </div>

      <div className='flex'>
        <Linkedin/> <a className='px-2' href="https://www.linkedin.com/in/rafael-brito-29a0b41a8/">Linkedin</a>
      </div>
    </div>
  )
}