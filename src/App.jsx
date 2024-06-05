import "./App.css";
import { ServiceWorkerRegistration } from "./components/OfflineServiceWorker/OfflineServiceWorkerRegistration";
import { Header } from "./components/Header/Header";
import PWAForm from './components/PWAForm/PWAForm';
import { Usage } from "./components/Usage/Usage";

function App() {
  return (
    <>
      <ServiceWorkerRegistration />
      <Header />
      <PWAForm />
      <Usage />
    </>
  );
}

export default App;
