import './App.css'
import { togo } from '../../togo/src/togo'

function App() {

  return (
    <>
      <div className='app'>
        Hola mundo
        <div className={togo(['primary-button'], {
          color: 'red',
          backgroundColor: 'blue',
          '&:hover': {
            color: 'blue',
            backgroundColor: 'red'
          }
        })}>
          Esto es Togo
        </div>
      </div>
    </>
  )
}

export default App
