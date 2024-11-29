import '../App.css';
import React, { useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [username, setUsername] = useState()
  const nav = useNavigate()

  const sendData = async (e) => {
    e.preventDefault()
    // console.log('Data', data)

    // try/catch : 예외처리, 에러가 발생할 가능성이 있는 부분을 try-catch
    try {
      const res = await instance.post('/getData', { id: id, pw: pw, username: username })
      console.log('res', res.data.result);
      if (res.data.result === 'success') {
        window.alert(`성공!`)
        nav('/')
      } else {
        window.alert(`실패..`)
      }
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className="signin-form-wrapper">
      <div className="signin-form-container">
        <form className="signin-form" onSubmit={sendData}>
          <label className="signin-form-label">ID :</label>
          <input type="text" className="signin-form-input" onChange={(e) => { setId(e.target.value) }} /><br />
          <label className="signin-form-label">PW :</label>
          <input type="text" className="signin-form-input" onChange={(e) => { setPw(e.target.value) }} /><br />
          <label className="signin-form-label">User :</label>
          <input type="text" className="signin-form-input" onChange={(e) => { setUsername(e.target.value) }} />
          <input type="submit" className="signin-form-submit" />
        </form>
      </div>
    </div>


  )
}

export default Signin