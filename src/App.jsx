import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
  }, [])

  const iOS = () => {
    return (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  const requestNotification = () => {
    if (!iOS()) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          
        }
      })
    } else {
      
    }
  }

  const installApp = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  return (
    <div className="App">
      <h2>Qu’est-ce qu’une Progressive Web App ?</h2>
        <p>Une PWA, c’est un site web installable qui peut fonctionner en hors ligne</p>
      <div>
        <p>Les PWA sont une alternative aux application oneline performante que l'on peut installer sur nos pc et smartphones</p>
      </div>

      <h2>Pros:</h2>
      <ul>
        <li>Ils peuvent fonctionner hors ligne !</li>
        <li>Moins d'espace dans votre disque de stockage et de mémoire</li>
        <li>Vous avez accès au commands natives</li>
        <li>Elle sont pour rapides et fiables</li>
        <li>Elle peuvent envoyer de notifcations</li>
      </ul>


      {supportsPWA ? 
        <button onClick={installApp}>install app</button> :
      <div
        style={{ color: "red"}}
      >Le PWA n'est pas supporté actuelement</div>}
    </div>
  )
}

export default App
