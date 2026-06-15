async function testBypass() {
  const urls = [
    'https://ik.imagekit.io/sio0ldtn8/Finca%20Villa%20Andrea/FOTOS%20VERSI%C3%93N%202.0/0615(8).mp4?updatedAt=1781507962264&tr=orig-true',
    'https://ik.imagekit.io/sio0ldtn8/Finca%20Villa%20Andrea/FOTOS%20VERSI%C3%93N%202.0/0615(8).mp4?tr=orig-true'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { 
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      console.log(`URL: ${url} -> Status: ${res.status}`);
      if (res.status === 200) {
        console.log(`Success! Content-Type: ${res.headers.get('content-type')}`);
      }
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  }
}
testBypass();
