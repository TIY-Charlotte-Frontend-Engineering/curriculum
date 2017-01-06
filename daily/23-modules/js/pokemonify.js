/**
 * Input: list of pokemon from server
 * Output: pokemon names as array
 */
function cleanup(pokes) {
    return pokes.map(nameOnly);
}

function nameOnly(pokemon) {
    // First letter should be uppercase, all others should be lowercase
    return pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
}

module.exports = cleanup;