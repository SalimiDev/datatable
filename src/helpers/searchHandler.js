export const searchHandler = inputValue => {
    const storageData = JSON.parse(localStorage.getItem('tableData'));
    const searchedKeyWord = inputValue.trim().toLowerCase();

    if (!searchedKeyWord) {
        return storageData; // No keyword provided, return the original data
    }

    return storageData.filter(item => {
        // Customize the properties to search within each object
        const propertiesToSearch = ['name', 'country', 'email', 'username', 'phone', 'email'];

        for (let property of propertiesToSearch) {
            if (item[property] && item[property].toString().toLowerCase().includes(searchedKeyWord)) {
                return true; // Match found, include the item in the filtered data
            }
        }

        return false; // No match found, exclude the item from the filtered data
    });
};
