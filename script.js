document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("tbody");
    const thead = document.querySelector("thead");
    const addRowBtn = document.getElementById("add-row-btn");
document.getElementById("export-csv-btn").addEventListener("click", () => {
    exportToCsv("codes"); // Default mode for codes
});

document.getElementById("export-names-btn").addEventListener("click", () => {
    exportToCsv("names"); // New mode for names
});

    let isDragging = false;
    let dragStartValue = null;
    let dragStartCell = null;

    // Generate table headers dynamically
function createTableHeaders() {
    const row = document.createElement("tr");
    attributes.forEach((attr) => {
        const th = document.createElement("th");
        th.textContent = attr.name;

        // Set column width from attributes.js
        if (attr.width) {
            th.style.width = attr.width;
        }

        row.appendChild(th);
    });
    const actionsTh = document.createElement("th");
    actionsTh.textContent = "Actions"; // Optional
    actionsTh.style.width = "50px"; // Set a fixed width for actions column
    row.appendChild(actionsTh);

    thead.appendChild(row);
}

    // Create a single table row dynamically
function createRow(data = {}) {
    const row = document.createElement("tr");

    attributes.forEach((attr) => {
        const cell = document.createElement("td");
        const container = document.createElement("div");
        container.className = "cell-container";
        container.style.position = "relative";

        // Set column width from attributes.js
        if (attr.width) {
            cell.style.width = attr.width;
        }

        const input = generateInputField(attr, data[attr.name] || attr.defaultValue || "");

        input.addEventListener("input", () => validateField(input, attr));
        container.appendChild(input);

        // Add drag handle
        const dragHandle = document.createElement("div");
        dragHandle.className = "drag-handle";
        dragHandle.addEventListener("mousedown", (event) => {
            isDragging = true;
            dragStartValue = attr.type === "checkbox" ? input.checked : input.value;
            dragStartCell = input;
            event.preventDefault();
        });
        container.appendChild(dragHandle);

        cell.appendChild(container);
        row.appendChild(cell);
    });

    const actionsCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.className = "remove-btn"; // Add the red style to remove button
    removeButton.addEventListener("click", () => tbody.removeChild(row));
    actionsCell.appendChild(removeButton);
    row.appendChild(actionsCell);

    tbody.appendChild(row);
}

    // Generate input field based on attribute type
function generateInputField(attr, value) {
    let input;

    switch (attr.type) {
        case "number":
            input = document.createElement("input");
            input.type = "number";
            if (attr.validation?.min) input.min = attr.validation.min;
            if (attr.validation?.max) input.max = attr.validation.max;
            input.value = value || attr.defaultValue || "";
            break;

        case "select":
            input = document.createElement("select");

            if (attr.values && Array.isArray(attr.values)) {
                attr.values.forEach((valueObj) => {
                    const optionElement = document.createElement("option");
                    optionElement.value = valueObj.name; // Use `name` as the value
                    optionElement.textContent = valueObj.name; // Display the `name`
                    input.appendChild(optionElement);
                });
            } else {
                console.warn(`No values defined for select attribute: ${attr.name}`);
            }

            input.value = value || attr.defaultValue || "";
            break;

        case "text":
            input = document.createElement("input");
            input.type = "text";
            if (attr.validation?.maxLength) input.maxLength = attr.validation.maxLength;
            input.value = value || attr.defaultValue || "";
            break;

        case "checkbox":
            input = document.createElement("input");
            input.type = "checkbox";
            input.checked = !!value; // Ensure it's a boolean
            break;

        default:
            console.error(`Unsupported field type: ${attr.type}`);
    }

    return input;
}

    // Validate a field in real-time
function validateField(input, attr) {
    let isValid = true;

    // Normalize the input value
    let value = input.value;
    if (attr.type === "checkbox") {
        value = input.checked ? "true" : "false";
    } else if (attr.type === "select") {
        // Ensure the value matches one of the `values`
        const match = attr.values?.find((v) => v.name === value);
        if (!match && attr.required) isValid = false;
    }

    if (attr.required && (!value || value === "")) {
        isValid = false;
    }

    if (attr.validation) {
        if (attr.validation.min && value < attr.validation.min) isValid = false;
        if (attr.validation.max && value > attr.validation.max) isValid = false;
        if (attr.validation.regex && !attr.validation.regex.test(value)) isValid = false;
    }

    // Highlight the field if invalid
    if (isValid) {
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
    }

    return isValid;
}

// Function to export CSV with either codes or names
function exportToCsv(mode = "codes") {
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const errors = [];
    
    // Validate all rows before exporting
    rows.forEach((row, rowIndex) => {
        row.querySelectorAll("td").forEach((cell, colIndex) => {
            if (colIndex >= attributes.length) return; // Skip "Actions" column

            const input = cell.querySelector("input, select");
            const attr = attributes[colIndex];

            // Run validation for the current field
            const isValid = validateField(input, attr);
            if (!isValid) {
                errors.push(`Error in Row ${rowIndex + 1}, Column "${attr.name}"`);
            }
        });
    });

    // If there are errors, block export and display them
    if (errors.length > 0) {
        displayErrorMessage(errors.join("\n"));
        return;
    }

    // Generate CSV if all validations pass
    const csvRows = [];

    // Add headers using either `code` or `name` depending on the mode
    const headers = attributes.map((attr) => (mode === "codes" ? attr.code : attr.name));
    csvRows.push(headers);

    // Process each row
    rows.forEach((row) => {
        const rowData = [];
        row.querySelectorAll("td").forEach((cell, index) => {
            if (index >= attributes.length) return; // Skip "Actions" column

            const input = cell.querySelector("input, select");
            const attr = attributes[index];
            let value = input.type === "checkbox" ? (input.checked ? "true" : "false") : input.value;

            // Convert value to `code` or `name` for select fields
            if (attr.type === "select" && attr.values) {
                const match = attr.values.find((v) => v.name === value);
                value = match ? (mode === "codes" ? match.code : match.name) : value; // Use either `code` or `name`
            }

            // Escape commas, double quotes, and newlines
            value = escapeCsvValue(value);

            rowData.push(value);
        });

        csvRows.push(rowData);
    });

    // Generate and trigger download of the CSV
    const csvContent = `data:text/csv;charset=utf-8,${csvRows
        .map((row) => row.join(","))
        .join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `table_data_${mode}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Helper function to escape CSV values
function escapeCsvValue(value) {
    if (typeof value !== "string") return value;
    // If the value contains a comma, double quote, or newline, escape it
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
        value = value.replace(/"/g, '""'); // Escape double quotes by doubling them
        return `"${value}"`; // Wrap the entire value in double quotes
    }
    return value;
}

   // helper function to display errors near the export button 
function displayErrorMessage(message) {
    let errorContainer = document.getElementById("error-container");

    // Create error container if it doesn't exist
    if (!errorContainer) {
        errorContainer = document.createElement("div");
        errorContainer.id = "error-container";
        errorContainer.style.color = "red";
        errorContainer.style.marginTop = "10px";
        errorContainer.style.textAlign = "center";
        document.body.appendChild(errorContainer);
    }

    // Display the error message
    errorContainer.textContent = message;
}



// Handle drag-fill functionality with real-time validation and green field border
tbody.addEventListener("mousemove", (event) => {
    if (!isDragging || !dragStartCell) return;

    const target = event.target.closest(".cell-container input, .cell-container select");
    if (!target || target === dragStartCell) return;

    const startIndex = dragStartCell.closest("td").cellIndex;
    const targetIndex = target.closest("td").cellIndex;

    if (startIndex === targetIndex) {
        const attr = attributes[startIndex]; // Get attribute configuration

        if (dragStartCell.type === "checkbox") {
            target.checked = dragStartCell.checked;
        } else {
            target.value = dragStartCell.value;
        }

        // Apply green border directly to the input/select field
        target.classList.add("drag-filling");

        // Validate the field after filling
        validateField(target, attr);
    }
});

// Remove green highlight on mouse release
document.addEventListener("mouseup", () => {
    isDragging = false;
    dragStartValue = null;
    dragStartCell = null;

    // Remove green border from all fields
    document.querySelectorAll(".drag-filling").forEach((input) => {
        input.classList.remove("drag-filling");
    });
});



    // Handle pasting tab-separated values
document.addEventListener("paste", (event) => {
    const activeElement = document.activeElement;
    if (!activeElement.closest("td")) return;

    const startRow = Array.from(tbody.rows).findIndex((row) =>
        Array.from(row.cells).some((cell) => cell.contains(activeElement))
    );
    const startCol = activeElement.closest("td").cellIndex;

    const pasteData = event.clipboardData.getData("text/plain");
    const lines = pasteData.trim().split("\n").map((line) => line.split("\t"));

    // Ensure enough rows exist for the pasted data
    while (tbody.rows.length < startRow + lines.length) createRow();

    // Paste data into the table
    lines.forEach((line, rowIndex) => {
        const targetRow = tbody.rows[startRow + rowIndex];
        line.forEach((value, colIndex) => {
            const targetCell = targetRow.cells[startCol + colIndex];
            if (!targetCell) return;

            const input = targetCell.querySelector("input, select");
            const attr = attributes[startCol + colIndex];

            let normalizedValue = value.trim();

            if (attr.type === "checkbox") {
                // Normalize checkbox input
                normalizedValue =
                    normalizedValue.toLowerCase() === "yes" ||
                    normalizedValue.toLowerCase() === "true";
                input.checked = normalizedValue;
            } else if (attr.type === "select") {
                // Find the corresponding value in the `values` array
                const match = attr.values.find((v) =>
                    [v.name, v.code, ...(v.aliases || [])].includes(normalizedValue)
                );
                input.value = match ? match.name : ""; // Use `name` for UI
            } else {
                // Text or number inputs
                input.value = normalizedValue;
            }

            validateField(input, attr); // Validate the input
        });
    });

    event.preventDefault();
});

    // Initialize table
    createTableHeaders();
    createRow(); // Add an initial row
    addRowBtn.addEventListener("click", createRow);
    exportCsvBtn.addEventListener("click", exportToCsv);
});