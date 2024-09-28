import React from 'react'

function Line(props) {
  return (
    <tr>
        <td>{props.item.id}</td>
        <td>{props.item.Age}</td>
        <td>{props.item.Experience}</td>
        <td>{props.item.Income}</td>
        <td>{props.item.zip}</td>
        <td>{props.item.Family}</td>
        <td>{props.item.CCAvg}</td>
        <td>{props.item.Education}</td>
        <td>{props.item.Mortgage}</td>
        <td>{props.item.pLoan}</td>
        <td>{props.item.SecuritiesAccount}</td>
        <td>{props.item.CdAccount}</td>
        <td>{props.item.Online}</td>
        <td>{props.item.outcome}</td>
    </tr>
  )
}

/** 
 * 
 * id, Age, CCAvg, CdAccount, Education, Experience, Family, Income, Mortgage, Online, SecuritiesAccount, outcome, pLoan, zip
 */

export default Line