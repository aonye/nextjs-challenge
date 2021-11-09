import data from '../../data/data';

function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(data);
    } else if (req.method === 'POST') {
        const newData = {
            name: req.body.name,
            message: req.body.message,
        }
        data.push(newData);
        res.status(200).json(data);
    }
}

export default handler;