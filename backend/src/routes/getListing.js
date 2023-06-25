import { db } from "../database";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM players WHERE playerID=?',
            [id],
        );
        const listing = results[0];
        return listing;
    }
}