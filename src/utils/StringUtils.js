import md5 from 'md5'

export default class StringUtils {

    /**
     * @param {string} str, ex: string to change into CamelCase
     * @return {string}
     */
    static toCamelCase(str) {
        if (!str) return null
        return str
            .toLowerCase() 
            .replace(/\s(.)/g, (a) => { 
                return a.toUpperCase() 
            }) 
            .replace(/^(.)/, (b) => { 
                return b.toUpperCase() 
            }) 
    }

    /**
     * @param {number} n, ex: value
     * @param {string} unit, ex: unit
     * @return {string}
     */
    static formatPrice(n, fixedPos = 0, unit = 'R') {
        if (n==null) return ''
        let value = n.toString().replace(/[^0-9-.]/g, '')
        value = parseFloat(value)
        const sign = Math.sign(value) === -1 ? '-' : ''

        return (
            sign +
            unit +
            Math.abs(value)
            .toFixed(fixedPos)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            )
    }

    /**
     * @param {number} number, ex: value
     * @return {string}
     */
    static numberWithCommas(number) {
        if (number === null || number === undefined) return '0'
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }


    /**
     * @param {string} string, ex: value
     * @param {string} substr, ex: value
     * @param {string} newstr, ex: value
     * @return {string}
     */
    static replace(string, substr, newstr) {
        return string.replace(substr, newstr)
    }

    static getThumbnail(url, width = 360, height = 360) {
        let originalImage = `${url  }`
        if (originalImage.indexOf('?') > -1) {
          originalImage = originalImage.substring(0, originalImage.indexOf('?'))
        }

        const size = `${width  }x${  height}`
        const filename = decodeURI(originalImage.split('/').pop())
        return (
            `https://rws-portal-global.s3.eu-west-1.amazonaws.com/Thumbnails/${ 
            size  }/${ 
            md5(filename).substring(0, 2)  }/${ 
            filename}`
        )
    }

    /**
     * @param {number} value, ex: value
     */
    static currencyFormat(value) {
        const result = value.toFixed(0).replace(/./g, (c, i, a) => {
          if (a[i-1]==="-") {
            return i > 0 && c !== "." && (a.length- i) % 3 === 0 ?  c : c
          }
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ?`,${c}`:c
        })
        return result
    }

    /**
     * @param {date} value, ex: 2019-11-7
     */
    static formatData1(value) {
        const date = new Date(value)
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ]
        
          const day = date.getDate()
          const monthIndex = date.getMonth()
        
        return `${day  } ${  monthNames[monthIndex]}`
    }

    static formatData2(value) {
        const date = new Date(value)
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ]
        
          const day = date.getDate()
          const monthIndex = date.getMonth()
          const year = date.getFullYear()
        
        return `${day  } ${  monthNames[monthIndex]  } ${  year}`
    }

    static formatAddress(address) {
        let result = ''
        if (!address) return ''
        if (address.complexBuilding)
            result += `${address.complexBuilding}, `
        if (address.streetAddress)
            result += `${address.streetAddress}, `
        if (address.suburb)
            result += `${address.suburb}, `
        if (address.city)
            result += `${address.city}, `
        if (address.province)
            result += `${address.province}, `
        if (address.postalCode)
            result += `${address.postalCode}, `
        return result
    }

    static getSearchType(term) {
        const temp = term.toLowerCase()
        return temp.startsWith("accessories")
            || temp.startsWith("bottom")
            || temp.startsWith("dress")
            || temp.startsWith("face")
            || temp.startsWith("body")
            || temp.startsWith("living")
            || temp.startsWith("gift")
            || temp.startsWith("outerwear")
            || temp.startsWith("top")
            || temp.startsWith("swimwear")
            || temp.startsWith("top")
            || temp.startsWith("underwear")
            || temp.startsWith("sleepwear")
            || temp.startsWith("sneaker")
    }
}
