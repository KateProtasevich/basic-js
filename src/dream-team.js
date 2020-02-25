module.exports = function createDreamTeam(members) {
       if (Array.isArray(members)) {
         let team = [];
         members.forEach( function(item) {
           if (typeof item === 'string') {
           let name = item.trim().toUpperCase();
          team.push(name[0]);
       }
    });

    return team.sort().join('');
} else {
  return false;
}
};
