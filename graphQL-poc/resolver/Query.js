exports.Query = {
    getIncomingResponse: async (parent, { id }, context) => {
    const breeds = await axios
        .get(`https://api.github.com/users/${id}`)
        .catch((error) => {
        console.log(error);
        });
    return breeds.data;
    },
};