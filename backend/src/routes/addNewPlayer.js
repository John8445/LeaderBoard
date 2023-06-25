import { NULL } from 'mysql/lib/protocol/constants/types';
import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const addNewPlayerRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        // const playerID = uuid();
        const { playerID = 0, firstName = '', lastName = '', age = 0, gamertag = '', platform = '', regionID = 0 } = req.payload;
        const teamID = null;

        await db.query(`
            INSERT INTO players (playerID, firstName, lastName, age, gamertag, platform, teamID, regionID) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [playerID, firstName, lastName, age, gamertag, platform, teamID, regionID]
        );

        return { playerID, firstName, lastName, age, gamertag, platform, teamID, regionID }
    }
}