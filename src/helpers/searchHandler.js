
export const searchHandler = (inputValues, tableColumns, dataToSearch) => {
    const filteredData = dataToSearch.filter(item => {
        for (let column of tableColumns) {
            const searchedKeyword = inputValues[column]?.trim()?.toLowerCase();

            if (searchedKeyword && item[column] && item[column].toString().toLowerCase().includes(searchedKeyword)) {
                return true;
            }
        }

        return false;
    });

    return filteredData;
};
