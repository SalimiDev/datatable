export const searchHandler = (inputValues, tableColumns, dataToSearch, globalSearchValue) => {
    const filteredData = dataToSearch.filter(item => {
        for (let column of tableColumns) {
            const searchedKeyword = inputValues[column]?.trim()?.toLowerCase();

            if (searchedKeyword && item[column] && item[column].toString().toLowerCase().includes(searchedKeyword)) {
                return true;
            }
        }

        if (globalSearchValue) {
            for (let column of tableColumns) {
                if (item[column] && item[column].toString().toLowerCase().includes(globalSearchValue.toLowerCase())) {
                    return true;
                }
            }
        }

        return false;
    });

    return filteredData;
};
