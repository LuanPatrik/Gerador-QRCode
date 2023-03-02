import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {
  const [valor, setValor] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  function gerar(link) {
    QRCodeLink.toDataURL(link, {
      width: 500,
      margin: 3
    }, (err, url) => {
      setQrCodeUrl(url)
    })
  }

  function handleQrCode(e){
    setValor(e.target.value)
    gerar(e.target.value)
  }

  return (
    <div className='container'>
      <div className='card'>
        <strong className='titulo'>GERADOR DE QR CODE</strong>
        <span className='subtitulo'>Insira uma URL ou texto para criar seu QR Code</span>

        <input 
          type="text" 
          value={valor} 
          className="input" 
          placeholder='Seu texto aqui...' 
          onChange={(e) => handleQrCode(e)}
        />
        
        <div className='qr-code'>
          <QRCode value={valor} size={96} elevation={2}/>
        </div>
        
        <a href={qrCodeUrl} download='qrcode.png' className='botao-download'>Download</a>
      </div>
    </div>
  )
}

export default App
