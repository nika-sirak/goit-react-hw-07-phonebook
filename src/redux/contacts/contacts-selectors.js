import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getLoader = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  getItems,
  getFilter,
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
