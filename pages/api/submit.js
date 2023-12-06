export default function handler(req, res) {
  console.log(req.body);
  fetch('http://localhost/seller/partner', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body
  }).then(r => {
    res.status(200).json({ ok: true })
  })
}