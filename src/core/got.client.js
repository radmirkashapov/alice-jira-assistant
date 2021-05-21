const got = require('got')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.client = got.extend({
    hooks: {
        beforeRequest: [
            options => {
                options.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjUiLCJlbWFpbCI6InJrYXNoYXBvdkBza29sb3BlbmRyYS5jb20iLCJyb2wiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh5YnJpZC5sb2NhbGhvc3QiLCJpYXQiOjE2MjE2MTg5ODAsImV4cCI6MTYyMTcwNTM4MH0.s6QxSfplvEOVYjQqXJBvCEopXPP_lreR-IKmg__N3a2_nteWk1htEuA6fnIOOe7wB8BBxI4Z0e7N4AJ4wwr85hmB2xSX9t6OcYEO26p_6PUBEE-5ysP9Bw-Tk-svGTIwyYd1Y7kUsQozfvJ7uxzTJT8Ewrxtv-0CFbVkGQim4XDFLOCycm8vSjB_ManmtNdS3ttL_315dkyDP2XWWG_oKaD1mJ23vM8clL1riqoEoKRonH41HUViGC5lDqDm42Zm5m2MswIejo80L9qsqaMdm2dKramlL2WFFNZVA4aZEebjnTFcFPB5un9HWrfCTjDbsFSsmkfra2_UwtpYT89jtw';
            }
        ]
    }
});