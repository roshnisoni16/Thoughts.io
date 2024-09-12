const db = require('../config/db');

class Post {
    static async create(title, content, category) {
        const [result] = await db.execute(
            'INSERT INTO posts (title, content, category) VALUES (?, ?, ?)',
            [title, content, category]
        );
        return result;
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM posts');
        return rows;
    }
}

module.exports = Post;
