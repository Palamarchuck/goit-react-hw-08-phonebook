export const getContacts = store => store.contacts;
export const getFilterContacts = ({ contacts, filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLowerCase();

        return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter))
    });
    return result;
}
export const getFilter = ({ filter }) => filter;
