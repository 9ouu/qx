// 随机 User-Agent
// 参考https://whatmyuseragent.com/device/hu/huawei-mate-40-pro
const userAgents = [
    'Mozilla/5.0 (Linux; Android 12; HarmonyOS; NOH-AL10; HMSCore 6.8.0.332) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/13.0.0.310 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; SM-G970U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 10; SM-G970U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/89.0.4389.72 Mobile/15E148 Safari/604.1'
];
const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
$done({ headers: { 'User-Agent': randomUserAgent } });
