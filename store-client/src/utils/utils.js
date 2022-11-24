import replace from 'lodash/fp/replace'
import split from 'lodash/fp/split'

export const parseQueryString = (query) => {
  const [, value] = split('=', replace('?', '', query))
  return value
} 

export const moneyFormat = (value) => {
  const money = Intl.NumberFormat(
    'es-AR',
    {
      styles: 'currency',
      currency: 'ARS'
    }
  ).format(value)
  return money
}
