const pokemons = (state = {url: 'default'}, action) => {
    switch (action.type) {
      case 'CHANGE_URL':
        return {
            url: action.url
        }
      default:
        return state
    }
  }

export default pokemons