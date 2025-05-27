"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExcel = void 0;
const exceljs_1 = require("exceljs");
const fs = require("fs");
const CreateExcel = (filename, sheet = 'Report', data, path = `excel/`) => {
    return new Promise((resolve) => {
        if (data.length <= 0)
            resolve(null);
        let rows = [];
        data.forEach(doc => rows.push(Object.values(doc)));
        const keys = Object.keys(data[0]);
        const book = new exceljs_1.Workbook();
        const addSheet = book.addWorksheet(sheet);
        rows.unshift(keys);
        addSheet.addRows(rows);
        styleSheet(addSheet, keys.length);
        const FILE = `${path}${filename}.xlsx`;
        const URL_PATH = `public/storage/${FILE}`;
        if (fs.existsSync(path))
            book.xlsx.writeFile(URL_PATH);
        else {
            fs.mkdirSync(`public/storage/excel`, { recursive: true });
            book.xlsx.writeFile(URL_PATH);
        }
        resolve(FILE);
    });
};
exports.CreateExcel = CreateExcel;
const styleSheet = (addSheet, keysLength) => {
    for (let index = 1; index <= keysLength; index++) {
        addSheet.getColumn(index).width = 25;
    }
    addSheet.getRow(1).font = { size: 11.5, bold: true, color: { argb: 'FFFFFF' } };
    addSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid' };
    addSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    addSheet.getRow(1).border = {
        top: { style: 'thin', color: { argb: '000000' } },
        left: { style: 'thin', color: { argb: 'FFFFFF' } },
        bottom: { style: 'thin', color: { argb: '000000' } },
        right: { style: 'thin', color: { argb: 'FFFFFF' } },
    };
};
//# sourceMappingURL=excel.js.map