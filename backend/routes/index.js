const express = require('express');
const router = express.Router();
const path = require('path')
const conn = require('../config/db')

// 4-3. 메인페이지 경로 설정
//      => server.js 추가 작업
router.get('/', (req, res)=>{
    console.log('main');
    // 6-2. 리액트 페이지 응답 설정
    res.sendFile(path.join(__dirname,'..' , '..', 'frontend', 'build', 'index.html'))
})

// Test.jsx에서 보내온 데이터 확인하는 backend router
router.post('/getData', (req, res) => {
    console.log('getdata router', req.body);

    // LINK_MEMBER라는 테이블 안에
    // ID: 'admin', PW : 123, USER_NAME 우리가 받아온 데이터로 저장
    
    res.json({
        result: 'success'
    })

    const ID = req.body.id
    const PW = req.body.pw
    const USER_NAME = req.body.username

    // SQL 쿼리 생성
    let sql = `INSERT INTO LINK_MEMBER VALUES(?, ?, ?)`;

    // 데이터베이스에 값 삽입
    conn.query(sql, [ID, PW, USER_NAME], (err, rows) => {
        if (err) {
            console.error('데이터베이스 오류:', err);
            return;
        }
        console.log('insert 완료', rows);
    });
})

// 로그인 라우터
router.post('/getLoginData', (req,res) => {
    console.log('getdata router', req.body);

    let { id, pw } = req.body

    // SQL 쿼리 생성
    let sql = `SELECT ID FROM LINK_MEMBER WHERE ID = ? and PW = ?`;

    // 데이터베이스에 값 삽입
    conn.query(sql, [id, pw], (err, rows) => {
        if (err) {
            console.error('데이터베이스 오류:', err);
            return;
        }
        console.log('insert 완료', rows);
    
        if(rows.length > 0){
            req.session.userId = id;
            console.log('req.session', req.session.userId);
            
            res.json({
                result : 'success',
                id : id
            })
        }else{
            res.json({
                result : 'fail'
            })
        }
    });
})

// 로그아웃 라우터
router.get('/logoutData', (req,res)=>{
    console.log('logoutData Router');
    req.session.destroy(()=>{
        console.log('req.session', req.session);
        res.json({id: req.session})
    })
})

router.get('/getSession',(req,res)=>{
    console.log('getSession Router', req.session.userId);
    res.json({id: req.session.userId})
})


module.exports = router;