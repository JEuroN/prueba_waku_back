export const queries = {
    SELECT_POST: 'SELECT * FROM cat_post',
    SELECT_USER: (google_id: any) =>{ return `SELECT * FROM user_account WHERE google_id = '${google_id}'`}
}