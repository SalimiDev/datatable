export const searchHandler = (inputValue, tableColumns, dataToSearch) => {
    const storageData = JSON.parse(localStorage.getItem('tableData'));
    const searchedKeyWord = inputValue?.trim()?.toLowerCase();
    // console.log(columnItem)
    if (!searchedKeyWord) {
        return dataToSearch; // No keyword provided, return the original data
    }
    return dataToSearch?.filter(item => {
        // Customize the properties to search within each object
        const propertiesToSearch = tableColumns;

        for (let property of propertiesToSearch) {
            if (item[property] && item[property].toString().toLowerCase().includes(searchedKeyWord)) {
                return true; // Match found, include the item in the filtered data
            }
        }

        return false; // No match found, exclude the item from the filtered data
    });
};
