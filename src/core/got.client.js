const got = require('got')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.client = got.extend({
    hooks: {
        beforeRequest: [
            options => {
                options.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjUiLCJlbWFpbCI6InJrYXNoYXBvdkBza29sb3BlbmRyYS5jb20iLCJyb2wiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh5YnJpZC5sb2NhbGhvc3QiLCJpYXQiOjE2MjA5OTYzMDYsImV4cCI6MTYyMTA4MjcwNn0.eZTg8fN32_mLFJmAjcvj5NobqNHnMB_hxrJL74Cymt43pNqTCJA_FbWW1dnOyyD5gBoTlOI377mnh3D7exYZkcl_FG6nAkT9Mr7wROPjXLhaJOUcMxFgt7IXInAHAe1PATjQzaPzZDn30OtTM0McEcRHDgc42zm2Fd8UKut1IlcdmWXEH_Ul8vY3q7Rwo91iX4Hl973XZUMjTcnnJdYGNHRO8xfBIjrD43unhPrzfqSlRUsOR2Ozng5wWIZSh-ad_mOydZG6fTujA2Dx5ST0l6svPhcC_DPiGodqAX45oRfhsBtJDEr60CwGqj1gbBfTP5WNcg77eGL_b9u0OzJsWg';
            }
        ]
    }
});