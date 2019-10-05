/* eslint-disable */
require('script-loader!file-saver');
import JSZip from 'jszip'
import {
  export_json_to_excel
} from './Export2Excel'

export function export_txt_to_zip(th, jsonData, txtName, zipName, bookType = 'txt') {
  const zip = new JSZip()
  const txt_name = txtName || 'file'
  const zip_name = zipName || 'file'
  console.log(bookType)
  if (bookType === 'xlsx') { // 导出xlsx压缩包
    let excelBlog = export_json_to_excel({
      header: th,
      data: jsonData,
      filename: txtName,
      bookType: bookType,
      returnBlob: true
    })
    // console.log(excelBlog)
    zip.file(`${txt_name}.xlsx`, excelBlog)
  } else if (bookType === 'txt') { // 导出txt压缩包
    const data = jsonData
    let txtData = `${th}\r\n`
    data.forEach((row) => {
      let tempStr = ''
      tempStr = row.toString()
      txtData += `${tempStr}\r\n`
    })
    zip.file(`${txt_name}.txt`, txtData)
  }
  zip.generateAsync({
    type: "blob"
  }).then((blob) => {
    saveAs(blob, `${zip_name}.zip`)
  }, (err) => {
    alert('导出失败')
  })
}