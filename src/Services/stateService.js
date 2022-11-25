// redux eto biblioteka kotoraja pomogaet nam rabotatj s sostojanijami komponentov 
// redux eto globalnoe sostojanie prilozenija 
// redux vzaimodejstvuet tolko s temi komponentami s kotorimi neobhodimo, ne zatragivaja ostalnih v cepochke
// Eto pomogaet lutwe kontrolirovat otrisovku/ render komponentov 
// redux rabotaet v nezavisimosti ot strukturnogo dereva proekta
// @reduxjs/toolkit eto glavnaja biblioteka redux
import { createAction, createReducer,configureStore } from '@reduxjs/toolkit';
import moment from 'moment';

const pageSize = 12;
// peremennaja tip object : iznachalnoe sostojanie 
const initialState = {
     errorMessage: null,
     totalResults: pageSize,
     searchParams:{ 
    q: 'Sport',
    from: moment().format("YYYY-MM-DDT00:00:000"),
    to: moment().format("YYYY-MM-DDT23:59:59.999"),
    language: 'ru',
    searchIn: 'title,description,content',
    pageSize,
    page: 1,
     } 
};
//creaateAction deklarirujut dejstvie v redux
// Eto dejstvie mi zapuskaem kogda hotim izmenit sostojanie
export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");
// createReducer eto obrabotchik dejstvija
// Tut mi govorim Reduxu ctho mi hotim sdelat etim dejstviem,
// v nashem sluchae i v osnovnom mi menjaem sostojanie
// action.payload - tut nahoditsa novaja peredannaja informacija
const reducer = createReducer(initialState,{
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]:(state,action) => {
        state.searchParams.page = action.payload;
    },
    [setTotalResults]:(state,action) =>{
        state.totalResults = action.payload;
    },
    [setSearchParams]:(state,action) => {
        state.searchParams = action.payload;
    }
});
// Tut mi vse sobiraem v odno i sozdaem tak nazivaemoe hraniliwe
// Hraniliwe mi peredaem v komponent Provider ot react-redux biblioteki i oborachivaem im ves nash proekt.(Eto vidno v glavnom index.js)
export  const store = configureStore({ reducer });


