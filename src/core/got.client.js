const got = require('got')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.client = got.extend({
    hooks: {
        beforeRequest: [
            options => {
                options.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjUiLCJlbWFpbCI6InJrYXNoYXBvdkBza29sb3BlbmRyYS5jb20iLCJyb2wiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh5YnJpZC5sb2NhbGhvc3QiLCJpYXQiOjE2MjA2NDY0NjUsImV4cCI6MTYyMDczMjg2NX0.Mg1e5PV_xHq3gMNI-j-xHMzF4seOKwKZXnR8uD4dpZmeHVJCGL6X3YW-9YOeJBBoTTS27maapPyPqUjgG8-n8Ed0GdtBQf8Hu2G8ES844Mgq8YjwKrt994OZP6vnhm8_9W6rBM9honO-8gYJ_Lbv7RYNLYwspWSWr4PGuSaRwKsSE33pg4f7M9ik_q54VJZnOVBCn1qwc4LvOw9r38G7Dsv3XY_gOI_u1eS2Ky8ZI3BXZ29BPolrZefjb28iJz5e5vFmZkhHhiGpfwUvaxZJuCL_O_oQW1wkBDlpxMybC8CcBg2BBhBxEj_ZVbFIRAegsaOTPy5wkwX-Wis_rfFERQ';
            }
        ]
    }
});