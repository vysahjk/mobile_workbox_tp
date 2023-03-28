import { useState, useEffect } from 'react'

function App() {
  const [browserName, setBrowserName] = useState("")
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    setBrowserName(navigator.userAgent)
  }, [])

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
  }, [])

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

      <h2>Avantages:</h2>
      <ul>
        <li>Ils peuvent fonctionner hors ligne !</li>
        <li>Moins d'espace dans votre disque de stockage et de mémoire</li>
        <li>Vous avez accès au commands natives</li>
        <li>Elle sont pour rapides et fiables</li>
        <li>Elle peuvent envoyer de notifcations</li>
      </ul>

      

      <h3>Navigateur necessaire:</h3>
      <ul>
        <li>Chrome</li>
        <li>Edge</li>
        <li>Safari</li>
        <li>Firefox</li>
      </ul>

      <h3 style={{color: "salmon"}}>Votre navigateur actuel: {browserName}</h3>

      <h3>Fonctionnalités disponible</h3>

      <ul>
        <li>Service worker</li>
        <li>Background Sync</li>
        <li>Push notifications</li>
        <li>Cache storage (offline)</li>
        <li>Payments</li>
        <li>Geolocation</li>
        <li>Fullscreen</li>
        <li>Copy & paste Text, PNG</li>
        <li>Contacts picker</li>
      </ul>

      <p>Les fonctionnalités disponibles restent dépendantes à la fois du navigateur et de l’OS</p>

      <h3 style={{color: "salmon"}}>Votre os: {navigator.platform}</h3>

      {!supportsPWA ? 
      <>
        <p>Vous pouvez installer PWA dès maintenat</p>
        <button style={{
           backgroundColor: 'green',
           color: "white"}}
         onClick={installApp}>installer PWA</button>
      </>
       :
      <div
        style={{ color: "red"}}
      >Le PWA n'est pas supporté actuelement</div>}
    </div>
  )
}

export default App
