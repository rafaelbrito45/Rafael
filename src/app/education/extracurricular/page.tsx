export const metadata = {
  title: 'Extracurricular',
}

export default async function Settings() {
  return(
    <div className='text-[#8F8CA8] mt-3 ml-5'>
      <div>
        <h2 className='text-xl font-bold'><a href="https://www.udemy.com/course/the-web-developer-bootcamp/">The Web Developer Bootcamp</a></h2>
        <p className='text-xs'>Fullstack web development course</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>Node js</li>
          <li>Mongo DB</li>
          <li>Handlebars</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl font-bold'><a href="https://www.udemy.com/course/react-redux/">Modern React with Redux</a></h2>
        <p className='text-xs'>Front end development course</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>React</li>
          <li>Redux Toolkit</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl font-bold'><a href="https://www.udemy.com/course/desenvolvimento-android-e-ios-com-flutter/">Flutter development</a></h2>
        <p className='text-xs'>Mobile development course</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>Flutter</li>
          <li>Dart</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl font-bold'><a href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">Node with React: Fullstack Web Development</a></h2>
        <p className='text-xs'>Fullstack course</p>
        <ul className='list-disc ml-5 mb-2'>
          <li>Node Js</li>
          <li>React</li>
          <li>Mongo DB</li>
        </ul>
      </div>
    </div>
  )
}