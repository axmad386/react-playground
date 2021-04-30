import './App.css';
import Resizer from 'react-image-file-resizer'
import { useState } from 'react';

function AppResizer() {
  const [preview, setPreview] = useState<string | null>(null)
  const handleFile = (e: any) => {
    console.log('ori', e.target.files[0])
    Resizer.imageFileResizer(e.target.files[0] as Blob, 600, 1300, 'WEBP', 100, 0, (converted) => {
      console.log('converted', converted)
      setPreview(URL.createObjectURL(converted))
    }, 'file')
  }

  return (
    <div className="App" style={{ padding: 10 }}>
      <input type="file" name="file" id="file" onChange={handleFile} />
      {preview && <div>
        <img src={preview} alt="ori" />
      </div>}
    </div>
  );
}

export default AppResizer;
