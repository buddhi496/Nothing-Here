import './App.css';
import myphoto from './image/myphoto.jpg'
import Popup from 'reactjs-popup';

function App() {
  return (
    <div className='popups'>
            <h4>Popup Screen</h4>
            <Popup trigger=
                {<img src={myphoto} alt="" />} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                              <img src={myphoto} alt="" />
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
  );
}

export default App;
