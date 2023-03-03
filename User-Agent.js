// 随机 User-Agent
// 参考https://whatmyuseragent.com/device/hu/huawei-mate-40-pro
const userAgents = [
    'Mozilla/5.0 (Linux; U; Android 12; zh-cn; NOH-AN00 Build/HUAWEINOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.102 MQQBrowser/13.5 Mobile Safari/537.36 COVC/046333',
    'Mozilla/5.0 (Linux; Android 12; HarmonyOS; NOH-AL10; HMSCore 6.8.0.332) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/13.0.0.310 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 12; HarmonyOS; NOH-AN01; HMSCore 6.8.0.332) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/13.0.0.310 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9; HMSCore 6.8.0.332) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/13.0.0.310 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9 Build/HUAWEINOH-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36[FBAN/EMA;FBLC/de_DE;FBAV/308.0.0.10.108;]',
    'Mozilla/5.0 (Linux; Android 10; NOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Mobile Safari/537.36 EdgA/104.0.1293.47',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Mobile Safari/537.36 EdgA/104.0.1293.47',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9 Build/HUAWEINOH-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36HiSearch/22.0.6.305',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9 Build/HUAWEINOH-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36[FBAN/EMA;FBLC/sk_SK;FBAV/299.0.0.11.111;]',
    'Mozilla/5.0 (Linux; Android 10; HarmonyOS; NOH-AN00; HMSCore 6.1.0.314) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 HuaweiBrowser/11.1.5.310 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-AN01 Build/HUAWEINOH-AN01; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 BingWeb/6.9.10',
    'Mozilla/5.0 (Linux; Android 10; HarmonyOS; NOH-AN00; HMSCore 6.1.0.314) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 HuaweiBrowser/11.1.4.301 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; HarmonyOS; NOH-AN00; HMSCore 6.0.0.306) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 HuaweiBrowser/11.1.3.300 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9 Build/HUAWEINOH-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/304.2.0.17.118;]',
    'Mozilla/5.0 (Linux; Android 10; HarmonyOS; NOH-AN01; HMSCore 5.3.0.312) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 HuaweiBrowser/11.1.2.301 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; U; Android 10; zh-Hans-CN; NOH-AN00 Build/HUAWEINOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Quark/5.1.0.180 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-AN00 Build/HUAWEINOH-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 LieBaoFast/5.23.1',
    'Mozilla/5.0 (Linux; U; Android 10; zh-Hans-CN; NOH-AN00 Build/HUAWEINOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Quark/4.6.1.159 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; NOH-NX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.116 Mobile Safari/537.36 EdgA/45.09.4.5079',
    'Mozilla/5.0 (Linux; U; Android 10; zh-Hans-CN; NOH-AN00 Build/HUAWEINOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Quark/5.7.8.218 Mobile Safari/537.36'
];
const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
$done({ headers: {     'User-Agent    ': randomUserAgent } });
