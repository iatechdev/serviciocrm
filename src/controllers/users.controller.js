
import {
    getOne
} from '../services/users/getOne';



export function getOneData(req, res, next) {
    try {
        const {
            id
        } = req.body;
        getOne(id).then(data => {
            res.status(200).json({
                message: 'One row',
                data: data
            });
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}

