import React from "react";
export const TableFormate = () => {
    const tableHeaderData = [
        {column1: "", column2: "Local Package", column3: "Global Package", column4: "ECOM. Package"}
    ]
    const tableData = [
        {column1: "Target", column2: "Google Maps", column3: "Organic Search Results", column4: "Organic Search Results + Product Listing"},
        {column1: "Best Suited For", column2: "Local/Niche Business", column3: "Business that target a national or global audience", column4: "Business that sells Products/Services"},
        {column1: "Price Range", column2: "160$-400$/Mo", column3: "225$-1125$/Mo", column4: "450$-2399$/Mo"},
    ]
   
    const rendertableHeaderData = (tableHeaderData, index) => {
        return (
            <tr key={index}>
                <th>{tableHeaderData.column1}</th>
                <th>{tableHeaderData.column2}</th>
                <th>{tableHeaderData.column3}</th>
                <th>{tableHeaderData.column4}</th>
            </tr>
        )
    }
    const rendertableData = (tableData, index) => {
        return (
            <tr key={index}>
                <td>{tableData.column1}</td>
                <td>{tableData.column2}</td>
                <td>{tableData.column3}</td>
                <td>{tableData.column4}</td>
            </tr>
        )
    }
    return (
            <div className="tblResponsive">
                <table className="table table-bordered">
                    <thead>
                    {tableHeaderData.map(rendertableHeaderData)}
                    </thead>
                    <tbody>
                    {tableData.map(rendertableData)}
                    </tbody>
                </table>
            </div>
        );
    }
  
