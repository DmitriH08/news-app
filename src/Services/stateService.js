import { createAction, createReducer,configureStore } from '@reduxjs/toolkit';

const initialState = {
    q: 'Sport',
    from: moment().format("YYYY-MM-DDT00:00:000"),
    to: moment().format("YYYY-MM-DDT23:59:59.999"),
    language: 'ru',
    searchIn: 'title,description,content',
    pageSize: 12, 
    page: 1,
    errorMessage: null,
};
export const setDefProps = createAction("setDefProps");

const secondReducer = createReducer(initialState,{
    [setDefProps]:(state,action)=> {
        state.language = action.payload;

}
});
export  const secondStore = configureStore({ secondReducer });



export const setErrorMessage = createAction("setErrorMessage");

const reducer = createReducer(initialState,{
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    }
});

export  const store = configureStore({ reducer });


