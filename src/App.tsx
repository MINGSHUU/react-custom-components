import React, {useState,useEffect} from 'react';
import axios from "axios";
const App: React.FC = () => {
  const [ title, setTitle ] = useState('')
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1', {
            responseType: 'json'
        }).then(
            res => {
                console.log(res)
                setTitle(res.data.title)
            }
        )
    }, [])
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(files) {
            const uploadedFile = files[0]
            const formData = new FormData()
            formData.append(uploadedFile.name, uploadedFile)
            axios.post('http://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res.data)
            })
        }
    }
  return (
    <div className="App" style={{ marginTop: 100, marginLeft: 100 }}>
        {/* <form
            method='post'
            encType='multipart/form-data'
            action="http://jsonplaceholder.typicode.com/posts">
            <input type="file" name='myFile' />
            <button type='submit'>Submit</button>
        </form> */}
        <input type="file" name='myFile' onChange={handleFileChange} />
    </div>
  );
}

export default App;
