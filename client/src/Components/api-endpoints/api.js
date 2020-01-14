import config from "../../config";

export default {
    login: `${config.serverUrl}/api/users/login`,
    register: `${config.serverUrl}/api/users/register`,
    getTalentById: `${config.serverUrl}/api/users/getTalentById`,
    getAllTalents: `${config.serverUrl}/api/users/getAllTalents`,
};
