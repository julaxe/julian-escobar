import https from 'https';

const hashes = ["1994492073","2681795072","3391063840","604461682"];

hashes.forEach(hash => {
  https.get(`https://julaxe.netlify.app/page-data/sq/d/${hash}.json`, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(`--- ${hash} ---`);
      console.log(data);
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
});
