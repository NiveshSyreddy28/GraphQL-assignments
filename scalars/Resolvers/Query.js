exports.Query={
    movies:(parent, args, {db}) =>{
        console.log('Hello');
        return db.movies;
    },
}