/* eslint-env mocha */

const expect = require('chai').expect
const json2xlsx = require('../json2xlsx')

describe('json2xlsx', () => {
  it('works', () => {
    const data = {
      worksheet1: [
        [1, 2, 3],
        [4, 5, 6]
      ],
      worksheet2: [
        {a: 1, b: 2},
        {a: 3, b: 4}
      ]
    }

    const wb = json2xlsx(data)

    expect(wb.SheetNames).to.deep.equal([ 'worksheet1', 'worksheet2' ])
    expect(Object.keys(wb.Sheets.worksheet1)).to.deep.equal([ 'A1', 'B1', 'C1', 'A2', 'B2', 'C2', '!ref' ])
    expect(Object.keys(wb.Sheets.worksheet2)).to.deep.equal([ 'A1', 'B1', 'A2', 'B2', 'A3', 'B3', '!ref' ])
    expect(wb.Sheets.worksheet1.A1.v).to.equal(1)
    expect(wb.Sheets.worksheet1.B1.v).to.equal(2)
    expect(wb.Sheets.worksheet1.C1.v).to.equal(3)
  })
})
