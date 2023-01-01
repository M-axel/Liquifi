export default function handler(req, res) {
    const { risk, token1, token2 } = JSON.parse(req.body)
    // token1: { ticker, value }, token2:{ ticker, value }

    console.log(risk, token1, token2);
  
    // TODO: appel au vrai service de calcul
    res.status(200).json({
        fees: 0.70,
        range: {
            // TODO: définir la structure
            test: "ok"
        },
        timeseries: [
            {x: 0, y: 1},
            {x: 1, y: 3},
            {x: 2, y: 1},
        ]
    })
  }
  