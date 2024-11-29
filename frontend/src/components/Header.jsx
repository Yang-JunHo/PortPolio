import '../App.css';
import React, { useEffect, useState } from 'react'
import instance from '../axios'
import { Link, useNavigate } from 'react-router-dom'


const Header = ({ user, setUser }) => {

  const nav = useNavigate()

  const [sInfo, setSInfo] = useState()

  // 현재 session값을 확인할 수 있는 함수
  const getSession = async () => {
    // console.log('세션 호출!');
    const res = await instance.get('/getSession')
    // console.log('res', res.data);
  }

  useEffect(() => {
    getSession()
    // sessionStorage 안에 있는 값 출력
    // console.log(sessionStorage.getItem('auth'));
    console.log(JSON.parse(sessionStorage.getItem('info')))
    setSInfo(JSON.parse(sessionStorage.getItem('info')))
  }, [user])

  const logout = async () => {
    // console.log('로그아웃 함수')
    const res = await instance.get('/logoutData')
    // console.log('res', res.data);

    // sessionStorage값 지우기
    sessionStorage.removeItem('info')
    // setUser("")
    alert("다음에 또 방문해주세요")
    nav('/')
  }
  console.log('user', user);

  return (
    <div>
      <nav className="header">
        <Link to="https://github.com/Yang-JunHo" className='menu'>GitHub</Link>
        <Link to="https://www.instagram.com/jooonho_y/" className='menu'>Instagram</Link>
        {sInfo == undefined 
        ? (<><Link to="/login" className='menu'>로그인</Link><Link to="/signin" className='menu'>회원가입</Link></>)
        : <>{sInfo.user_id}님 <button onClick={logout} className='menu'>로그아웃</button></>}
      </nav>
    </div>
  )
}

export default Header