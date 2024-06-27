import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <div className="flex flex-col gap-6 w-screen h-screen justify-center items-center mx-auto bg-[rgb(245,245,220)]">
      <h1 className="text-3xl font-bold mb-14">Buzz Alerts</h1>
      <Alert
        colors={'bg-blue-600'}
        iconUrl={
          'https://www.citypng.com/public/uploads/preview/white-outline-round-tick-check-mark-icon-sign-symbol-png-31623352396c0yfvbnugq.png'
        }
        message={'Information Alert'}
      />
      <Alert
        colors={'bg-[#2dca73]'}
        iconUrl={
          'https://www.citypng.com/public/uploads/preview/-516153360704du7uuqwcw.png'
        }
        message={'Success Alert'}
      />
      <Alert
        colors={'bg-[#ffb800]'}
        iconUrl={
          'https://www.citypng.com/public/uploads/preview/white-notification-bell-icon-transparent-background-11638985030nycenfyruw.png'
        }
        message={'Warning Alert'}
      />
      <Alert
        colors={'bg-[#ff0b37]'}
        iconUrl={
          'https://www.citypng.com/public/uploads/preview/download-hd-exclamation-point-alert-triangle-white-icon-png-11640517751snwhkzsqkt.png'
        }
        message={'Error Alert'}
      />
    </div>
  );
}

export default App;
