import db from '../db/index.js'
import dotenv from 'dotenv'
dotenv.config()
export const admin = (req, res) => {
    const {pass} = req.query
    if (!pass || pass != process.env.S ) {
        return res.status(403).end('Forbidden')
    }
    db.query(`select user_id, password from she`, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).end('Internal server error!')
        }
        res.render('admin', {result})
    })
}
export default admin