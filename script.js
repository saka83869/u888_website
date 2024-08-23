const domains = [
    'https://www.google.com/',
    'https://www.youtube.com/',
    'https://mail.google.com'
];

async function checkDomains() {
    for (const domain of domains) {
        try {
            const response = await axios.get(domain);
            console.log(`Kết nối thành công: ${domain}`);
            window.location.href = domain
            break;
        } catch (error) {
            console.log(`Không thể kết nối tới: ${domain}`);
        }
    }
}

checkDomains();
