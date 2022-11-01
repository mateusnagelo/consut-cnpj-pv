// export default function handler(req, res) {
//     const { cnpj } = req.query;

//     fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`, {
//             method: "GET",
//             Headers: {
//                 "content-Type": "aplication/json",
//             },

//         })
//         .then((result) => {
//             if (result.ok) {
//                 return result.json();
//             } else {
//                 return res.status(500).json({ error: "Erro recebido do RECEITAWS." });
//             }
//         })
//         .then((result) => {
//             res.status(200).json(result);
//         });




// }