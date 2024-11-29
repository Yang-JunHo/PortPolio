// 기본 모듈 가져오기
const express = require('express');
const app = express();
const indexRouter = require('./routes/index')

// 리액트 프로젝트 경로 설정
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

/* CORS (Cross-Origin -Resource-sharing) 교차 출처 리소스 공유 정책 
    - Origin (출처)
        http://localhost:3000/123?search=hello
            * http:// : 프로토콜
            * localhost : 호스트
            * 3000 : 포트번호
            * Origin == 프로토콜 + 호스트 + 포트번호
     
    - cors 해결 -> 브라우저에게 요청
    - node에서는 cors라는 미들웨어 사용

    app.use(cors({
        origin : '*'
    }))
*/

const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// 세션 설정

const session = require('express-session')
const fileStore = require('session-file-store')(session)

let fileStoreOptions = {
    path : "./session", // 세션 파일 저장 경로
    reapInterval : 10, // 세션 정리 주기(10초)
}

// 세션 미들웨어 설정
app.use(session({
    httpOnly : true, // http를 통해서만 세션에 접근
    resave : false, // 세션을 항상 재저장하지 않도록
    secret : 'ais', //세션 암호화
    saveUninitialized : false, // 초기화 되지 않은 세션은 저장하지 않도록
    store : new fileStore(),
    cookie : {maxAge : 30000} // 쿠키의 유효기간(30초)
}))

// 메인페이지 경로 설정
app.use('/', indexRouter);

// 포트 설정
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
});