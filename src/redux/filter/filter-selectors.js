
export const getFilterContacts = ({ items, filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ name, number }) => {
        const normalizedName = name.toLowerCase();

        return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter))
    });
    return result;
}
export const getFilter = ({ filter }) => filter;
