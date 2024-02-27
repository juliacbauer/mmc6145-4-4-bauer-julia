// TODO: import actions and implement reducer for each action
import { 
  ADD_BOOK, 
  REMOVE_BOOK, 
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload} ) {
  const { favoriteBooks } = prevState
  switch(action) {
    case ADD_BOOK:
      const addFaveBook = [...favoriteBooks, payload];
      saveToLocalStorage(addFaveBook);
      return {...prevState, favoriteBooks: addFaveBook}
    case REMOVE_BOOK:
      const unfaveBook = favoriteBooks.filter(book => book.id !== payload);
      saveToLocalStorage(unfaveBook);
      return {...prevState, favoriteBooks: unfaveBook}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}