function generateMuiColumns(item) {
    const columns = [];

    for (const key in item) {
        if (key === 'avatar' || key === 'geo') {
            continue; // Skip the "avatar" and "geo" keys
        }

        if (typeof item[key] === 'object') {
            // Handle nested objects
            const nestedColumns = generateMuiColumns(item[key]);
            nestedColumns.forEach(nestedColumn => {
                // Push nested columns with updated field, headerName, and valueGetter
                columns.push({
                    field: `${key}.${nestedColumn.field}`,
                    headerName: nestedColumn.headerName,
                    width: 150,
                    valueGetter: params => params.row[key][nestedColumn.field],
                });
            });
        } else {
            // Handle non-nested properties
            const width = key === 'body' || key === 'description' ? 500 : 150;
            columns.push({
                field: key,
                headerName: key,
                width,
            });
        }
    }

    return columns;
}

export default generateMuiColumns;
