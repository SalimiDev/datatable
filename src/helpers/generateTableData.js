//extract nested columns from nested data
function generateNestedColumns(item) {
    const columns = [];

    for (const key in item) {
        if (key === 'avatar' || key === 'geo') {
            continue; // Skip the "avatar" and "geo" keys
        }

        if (Array.isArray(item[key])) {
            // Handle nested arrays
            const nestedColumns = generateNestedColumns(item[key]);
            nestedColumns.forEach(nestedColumn => {
                columns.push(key);
            });
        } else if (typeof item[key] === 'object') {
            // Handle nested objects
            const nestedColumns = generateNestedColumns(item[key]);
            nestedColumns.forEach(nestedColumn => {
                columns.push(key);
            });
        } else {
            // Handle non-nested properties
            const width = key === 'body' || key === 'description' ? 500 : 150;
            columns.push(key);
        }
    }

    return columns;
}

//generating data of table base on is nesting object or not
export default function generateTableData(data) {
    const nestedColumns = generateNestedColumns(data[0]); // Assuming all objects in the data array have the same structure

    const tableData = data.map(item => {
        const rowData = {};

        nestedColumns.forEach(column => {
            if (Array.isArray(item[column]) || typeof item[column] === 'object') {
                // Handle nested arrays and objects recursively
                const nestedData = generateTableData([item[column]]);
                const nestedRowData = nestedData[0];

                Object.keys(nestedRowData).forEach(nestedColumn => {
                    rowData[nestedColumn] = nestedRowData[nestedColumn];
                });
            } else {
                // Handle non-nested properties
                rowData[column] = item[column];
            }
        });

        return rowData;
    });

    return tableData;
}
