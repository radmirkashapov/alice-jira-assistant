const got = require('got')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.client = got.extend({
    hooks: {
        beforeRequest: [
            options => {
                options.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjUiLCJlbWFpbCI6InJrYXNoYXBvdkBza29sb3BlbmRyYS5jb20iLCJyb2wiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh5YnJpZC5sb2NhbGhvc3QiLCJpYXQiOjE2MjA4MDk0MjYsImV4cCI6MTYyMDg5NTgyNn0.UFVAG8pkhwjX-iUh_-4tZmseWx0M-2fCdcCcoFHbA0hSW3w1TkcVt--GmfxsPJiR8yGf-jn-x7wZPDZKUv7KB7M_rlzje69s7Z_zenbuZS966gTmU_pZ9f_tlovL6P-cIlrEVrEZWSwg0q4l3iimll8cQu78BfCKsHFwReRwN2XKRJFdXZ6Cu8rPBrejk0VdjOv8P65dbjnLPNksn1YhkyEzrtNeXPfJ2yGKoGWfqMn-2I_A8IK49YwdxHDjDBAV6U_OGYD7LpI6Y4JhgqVkXTJBLp5iXJAOrGrlrRYrppeBALCY84RTiO3XgyNliNq-uwfXRtUEFhxlTeg1vO3wjQ';
            }
        ]
    }
});