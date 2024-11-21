import db from '../db/index.js'

const varifyUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select user_id from she where id = ?', [id], (error, result) => {
            if (error) {
                return reject(error)
            }
            return resolve(result)
        })
    })
}
export default varifyUser