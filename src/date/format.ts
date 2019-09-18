/**
 * 格式化日期, yyyy - 年，MM - 月，dd - 日，hh - 时，mm - 分， ss - 秒
 * @param { string | Date } inputDate 日期字符串或日期
 * @param { string } format 格式，eg：yyyy-MM-dd
 * @returns { string } 格式化后的日期字符串
 */

function format (inputDate: string | Date, format?: string): string {
  try {
    if (!format) {
      return inputDate.toString()
    }
    if (!(inputDate instanceof Date)) {
      inputDate = new Date(inputDate)
    }
    const fmts: any = {
      'y{1,4}': inputDate.getFullYear(), // 年
      'M{1,2}': inputDate.getMonth() + 1, // 月
      'd{1,2}': inputDate.getDate(), // 日
      'h{1,2}': inputDate.getHours(), // 时
      'm{1,2}': inputDate.getMinutes(), // 分
      's{1,2}': inputDate.getSeconds() // 秒
    }
    for (let fmt in fmts) {
      const matches: RegExpMatchArray | null = format.match(new RegExp(`(${fmt})`))
      if (matches && matches[0]) {
        const replaceStr: string = '0000' + fmts[fmt]
        format = format.replace(matches[0], replaceStr.substring(replaceStr.length - matches[0].length))
      }
    }
    return format
  } catch (error) {
    console.log(`格式化日期失败：${error.message}`)
    return inputDate.toString()
  }
}

export default format