import React, { useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [user, setUser] = useState()
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(id, pw)

    try {
      const res = await instance.post('/getLoginData', { id: id, pw: pw })
      console.log('res', res.data.result);
      if (res.data.result === 'success') {
        setUser(res.data.id)

        // sessionStorage.setItem('auth','user')  // 로그인 여부만 브라우저 세션에 저장
        let obj = {
          auth: 'user',
          user_id: res.data.id
        }

        sessionStorage.setItem('info', JSON.stringify(obj))

        window.alert(`환영합니다!`)
        nav('/')
      } else {
        window.alert('잘못된 아이디 또는 비밀번호입니다..')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-form-label">ID :</label>
          <input type='text' className="login-form-input" onChange={e => setId(e.target.value)} />
          <br />
          <label className="login-form-label">PW :</label>
          <input type='password' className="login-form-input" onChange={e => setPw(e.target.value)} />
          <input type='submit' className="login-form-submit" value="로그인" />
        </form>
      </div>
    </div>
  )
}

export default Login