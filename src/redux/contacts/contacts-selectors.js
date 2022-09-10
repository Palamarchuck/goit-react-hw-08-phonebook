export const getContacts = store => store.items;

// export const getContacts = ({contacts}) => contacts.items;

// export const getFilterContacts = ({ contacts = [], filter }) => {
//     if (!filter) {
//         return contacts;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name, number }) => {
//         const normalizedName = name.toLowerCase();

//         return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter))
//     });
//     return result;
// }


export const getFilterContacts = ({ items, filter }) => {
    if (!filter) {
        return items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ name, number }) => {
        const normalizedName = name.toLowerCase();

        return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter))
    });
    return result;
}

