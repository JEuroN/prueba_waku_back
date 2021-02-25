export const queries = {
    SELECT_POST: 'SELECT * FROM cat_post',
    SELECT_USER: (google_id: any) =>{ return `SELECT * FROM user_account WHERE google_id = '${google_id}'`},
    MANY_GATOS_RANDOM: 'SELECT * FROM cat_post ORDER BY RANDOM() LIMIT 20',
    DELETE_POST: 'DELETE FROM cat_post',
    SELECT_GATOS_BY_CATEGORY: (category: any) => { return `SELECT * FROM cat_post WHERE post_category_id='${category}' ORDER BY RANDOM() LIMIT 20`},
    SELECT_GATOS_BY_BREED: (breed: any) => { return `SELECT * FROM cat_post WHERE post_breed_id='${breed}' ORDER BY RANDOM()`}
}