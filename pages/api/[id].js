// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cats = [
  {
    "id": "lurky",
    "color": "orange",
    "image": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id": "snarky",
    "color": "white",
    "image": "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id": "terry",
    "color": "brown",
    "image": "https://images.unsplash.com/photo-1644303750582-d70a8774e695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
];

export default function handler(req, res) {
  const { id } = req.query;
  console.log('id', id);
  const cat = cats.find(c => c.id === id);
  console.log('cat', cat)
  res.status(200).json({ data: cat })
}
