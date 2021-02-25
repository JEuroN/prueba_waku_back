const initOptions = {};
import config from '../config';
const pgp = require('pg-promise')(initOptions)
const db = pgp(config.db);

const userTable = new pgp.helpers.ColumnSet(['google_id', 'name', 'email', 'given_name', 'family_name', 'image_url'], {table: 'user_account'});

const postTable = new pgp.helpers.ColumnSet(['post_id', 'post_category', 'post_breed', 'post_origin', 'post_url', 'post_category_id', 'post_breed_id'], {table: 'cat_post'});
const insertRow = (value: any, table: any) => { return pgp.helpers.insert(value, table) }

module.exports = {db, userTable, postTable, insertRow}

