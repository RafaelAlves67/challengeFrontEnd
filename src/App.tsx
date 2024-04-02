import './App.css'
import avatar from './assets/avatar-jessica.jpeg'

function App() {
  

  return (
      <body className='d-flex align-items-center h-100 bg-dark h-100'>
          <main className='w-100'>
            <section className=''>

                    <img src={avatar} alt="" className='my-3'/>

                    <h1 className='text-light fs-3'>Jessica Randall</h1>

                    <p className='desc mb-4'>London, United Kingdom</p>

                    <p>"Front-end developer and avid reader"</p>

                    <ul>
                            <li>GitHub</li>
                            <li>Frontend Master</li>
                            <li>Linkedin</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                    </ul>
            </section>
            </main>
      </body>
  )
}

export default App
