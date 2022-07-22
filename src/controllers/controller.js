import fetch from 'node-fetch';

const url = process.env.DB_URL;

export const events = async (req, res) => {
    try {
        const response = await fetch(url + '/shows.json');
        let evs = Object.values(await response.json())
        res.json(evs);
    } catch (e) {
        res.status(500).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
