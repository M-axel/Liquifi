export default function handler(req, res) {
    const { risk, token1, token2, range } = JSON.parse(req.body)

    console.log('API /pool :', risk, token1, token2, range);
  
    // TODO: appel au vrai service de calcul
    res.status(200).json({})
  }
  