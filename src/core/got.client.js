const got = require('got')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.client = got.extend({
    hooks: {
        beforeRequest: [
            options => {
                options.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjUiLCJlbWFpbCI6InJrYXNoYXBvdkBza29sb3BlbmRyYS5jb20iLCJyb2wiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh5YnJpZC5sb2NhbGhvc3QiLCJpYXQiOjE2MjEwNjUyODAsImV4cCI6MTYyMTE1MTY4MH0.K3WujCLT88X_ow1OdAU5m98HHEyleJdZMWABdXYyAtsMDmerWcVqGMv6E9RR-B2OJ-hsYaasMWFrcj0_jW7edoJzVx7BEtj27YFZ5NTw7pJKiGmrvdyWIFZ-7OpOBq-sT-TI8620cv8DsnRft1n59tNm5RBsPYJFoE301m15RCo90nvS40m_JSbFSkedlT9pDoNcq3n7lo8c3irIMg-7lynYQEBpst7VnckiuPDAeBTiSNlVcpvFIaMphkUfEnQwaPlrFozJ1sMkM1u29YOK8oDZu_dyclq5fNYLmLiavgEVPcH5YAjmy8B_jXkNLEKpjnOFh7hyrg1e-jsXHG96mQ';
            }
        ]
    }
});