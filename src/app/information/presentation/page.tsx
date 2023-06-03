import Image from "next/image"
export const metadata = {
  title: 'Personal Information',
}

export default async function Settings() {
  return(
    <div className='text-[#8F8CA8] mt-3 ml-5'>
      <p className='pr-5 mb-3'>Hello! my name is Rafael, I am a software developer, mostly working with front-end but also a back-end enthusiast.You will find everything about my projects and experiences on this page, fell free to contact me and take a look at my github projects.</p>
      <p className="pr-5 mb-3">One of my goals is to use technology to help people, be a reference when it comes to software development, and be the best version of myself everyday</p>
      <p className="pr-5 mb-2">Knowledge is one of the best things you can aquire because no one can take it from you, speaking of knowledge, here is a short list of what I have been learning on my tech career:</p>
      <div className="flex justify-between">
        <ul className='list-disc ml-5 mb-4'>
          <li>React</li>
          <li>Angular</li>
          <li>Vue</li>
          <li>Node js</li>
          <li>Docker</li>
          <li>Git</li>
          <li>Scrum</li>
        </ul>
        <Image
          className="rounded-[50%] mr-5"
          src="/profile.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>

      <p>Stay Relentless!</p>

    </div>
  )
}