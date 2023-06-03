import {Mail,Phone,Linkedin} from 'lucide-react'

export const metadata = {
  title: 'Personal Information',
}

export default async function Settings() {
  return(
    <div className='text-[#8F8CA8] mt-3 ml-5'>
      <div>
        <h2 className='text-xl font-bold'>Faculdade Impacta</h2>
        <p className='text-xs'>02/2023 - 07/2025</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>Analysis and systems development</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl font-bold'>Universidade Federal do ABC</h2>
        <p className='text-xs'>05/2017 - TBC</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>Bachelor in Science and Technology</li>
          <li>Computer Science</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl font-bold'>Etec Martin Luther King</h2>
        <p className='text-xs'>02/2013 - 12/2015</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>High School and technical in Industrial Automation</li>
        </ul>
      </div>
    </div>
  )
}