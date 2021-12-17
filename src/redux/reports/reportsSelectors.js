import { createSelector } from 'reselect';

const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;

// const getFilterPokemonByName = state => state.pokemon.filterPokemonByName;
// const getFilterPokemonByType = state => state.pokemon.filterPokemonByType;

// const getFilteredPokemon = createSelector(
//   [getPokemonAll, getFilterPokemonByName, getFilterPokemonByType],
//   (pokemonAll, getFilterPokemonByName, filterPokemonByType) => {
//     return pokemonAll?.filter(({ name, type }) => {
//       if (filterPokemonByType === '') {
//         return name.toLowerCase().includes(getFilterPokemonByName);
//       } else {
//         return (
//           name.toLowerCase().includes(getFilterPokemonByName) &&
//           type.includes(filterPokemonByType)
//         );
//       }
//     });
//   },
// );

export { getCategoryDataExpense, getCategoryDataIncome };
