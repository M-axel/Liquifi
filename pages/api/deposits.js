export default function handler(req, res) {
  const { token1, token2 } = JSON.parse(req.body)
  // token1: { ticker, value }, token2:{ ticker }

  // TODO: appel au vrai service de calcul
  res.status(200).json(token1.value)
}
