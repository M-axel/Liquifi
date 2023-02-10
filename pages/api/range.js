export default function handler(req, res) {
    const { risk, token1, token2 } = JSON.parse(req.body)
    // token1: { ticker, value }, token2:{ ticker, value }

    console.log('API /range :', risk, token1, token2);
  
    // TODO: appel au vrai service de calcul
    res.status(200).json({
        fees: 0.70,
        range: {
            low: 2.1,
            mid: 3,
            high: 4.6,
        },
        series: [
            {x: 0, y: 1},
            {x: 1, y: 3},
            {x: 2, y: 4},
            {x: 3, y: 6},
            {x: 4, y: 4.9},
            {x: 5, y: 3.9},
            {x: 6, y: 3.3},
            {x: 7, y: 3.1},
            {x: 8, y: 2},
            {x: 9, y: 1.1},
        ]
    })
  }
  