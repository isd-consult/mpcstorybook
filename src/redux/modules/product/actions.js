/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { parse, stringify } from 'query-string'
import { sortList } from 'constants/productlist'
import StringUtils from 'utils/StringUtils'
import { history } from '../../index'
import {
  setLoading,
  setPageSize,
  setPageNumber,
  setTotalCount,
  setFilters,
  setSort,
  setTitle,
  setSubtitle,
  setProducts,
  setError,
  clearState,
  setRecommendItems,
  setRecommendURL
} from './reducer'

// =======================================
// Init
// =======================================
export function initAction() {
  return async dispatch => {
    dispatch(onTitleAction())
    dispatch(fetchFilters())
    await dispatch(fetchProducts())
  }
}

// =======================================
// Fetch filters
// =======================================
export function fetchFilters() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const {
        router: {
          location: { search },
        },
      } = getState()

      const params = parse(search)

      const minPrice = params.minPrice || '0'
      const maxPrice = params.maxPrice || '10000'

      let request = {}

      if (params.search_query) {
        request = {
          brand: params.brands || [],
          gender: params.gender || [],
          product_type: params.product_type || [],
          product_sub_type: params.product_sub_type || [],
          newin: params.newin || '',
          color: params.color || [],
          price: [minPrice, maxPrice],
          search_query: params.search_query || '',
        }
      }

      if (params.order && params.sort_by) {
        dispatch(
          setSort(
            sortList.find(
              list =>
                list.value.label === params.sort_by &&
                list.value.order === params.order,
            ),
          ),
        )
      }

      API.post('mpc', ApiUtils.getAvailableNewFilter(), {
        body: request,
      })
        .then(response => {
          const data = getUpdatedResponseByFilters(response, params)
          dispatch(setFilters(data))
          resolve(data)
        })
        .catch(error => {
          dispatch(setError(error))
          reject(error)
        })
    })
  }
}

// =======================================
// Fetch products
// =======================================
export const fetchProducts = (pageNumber = 1, pageSize = 20) => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {
        router: {
          location: { search },
        },
        product: { filters, sortOption },
      } = getState()
      const params = parse(search)

      const {
        product: { products },
      } = getState()

      let temp = []
      let sortBy = params.sort_by || ''
      let order = params.order || ''

      const minPrice = params.minPrice || '0'
      const maxPrice = params.maxPrice || '10000'

      const request = {
        brand: [],
        gender: [],
        product_type: [],
        product_sub_type: [],
        color: [],
        size: [],
      }

      if (params.maxPrice || params.minPrice)
        request.price = [minPrice, maxPrice]
      if (params.price) request.price = [params.price[0], params.price[1]]
      if (params.search_query) request.search_query = params.search_query

      if (sortOption) {
        sortBy = sortOption.value.label
        order = sortOption.value.order
      }

      if (filters) {
        let historyRequest = {}
        const price = filters.price.find(item => item.checked)

        request.product_type = extractSelectedItems(filters.product_type, 0)
        request.product_sub_type = extractSelectedItems(filters.product_type, 1)
        request.brand = extractSelectedItems(filters.brand, 0)
        request.size = extractSelectedItems(filters.size, 0)
        request.color = extractSelectedItems(filters.color, 0)

        if (price) {
          request.price = price.value
        } else {
          delete request.price
        }

        request.gender = extractSelectedItems(filters.gender, 0)

        historyRequest = { ...request }

        if (sortBy) historyRequest.sort_by = sortBy
        if (order) historyRequest.order = order

        history.push({
          search: stringify(historyRequest),
        })

        dispatch(onTitleAction())
      } else {
        if (params.product_type) request.product_type = params.product_type
        if (params.brand) request.brand = params.brand
        if (params.size) request.size = params.size
        if (params.color) request.color = params.color
        if (params.gender) request.gender = params.gender
        if (params.product_sub_type) {
          request.product_sub_type = params.product_sub_type
        }
      }

      dispatch(setLoading(true))

      API.post(
        'mpc',
        ApiUtils.productList(pageNumber, pageSize, sortBy, order),
        { body: request },
      )
        .then(async response => {
          dispatch(setPageNumber(pageNumber))
          dispatch(setPageSize(pageSize))
          dispatch(setTotalCount(response.total))
          if(response.total === 0){
            if(StringUtils.getSearchType(request.search_query)){
              const res = await API.post(
                'mpc',
                ApiUtils.productList(1, 20),
                {body: {
                  search_query: 'Sneaker'
                }}
              )
              dispatch(setRecommendItems(res.products))
            }
            else {
              const recommendations =
                await API.get('mpc', ApiUtils.getRecommendations())
              if(recommendations.length > 0) {
                const res = await API.post(
                  'mpc',
                  ApiUtils.productList(1, 20),
                  {body: {
                    brand: recommendations
                  }}
                )
                let recommendURL = '/product_list?'
                recommendations.forEach(item=>{
                  recommendURL += `brand=${item}&`
                })
                dispatch(setRecommendURL(recommendURL))
                dispatch(setRecommendItems(res.products))
              }
              else {
                dispatch(setRecommendURL(null))
                dispatch(setRecommendItems([]))
              }
            }
          }
          if (pageNumber === 1) {
            temp = response.products
          } else {
            temp = products.concat(response.products)
          }

          if (sortOption && sortOption.value.label === 'newin') {
            const newinItems = []
            const oldItems = []
            temp.forEach(item => {
              if (item.is_seen) oldItems.push(item)
              else newinItems.push(item)
            })
            temp = newinItems.concat(oldItems)
          }

          dispatch(setProducts(temp))
          dispatch(setLoading(false))
          resolve(response)
        })
        .catch(error => {
          dispatch(setError(error))
          dispatch(setLoading(false))
          resolve(error)
        })
    })
  }
}

// =======================================
// On sort action
// =======================================
export function onSortAction(options) {
  return dispatch => {
    dispatch(setProducts([]))
    dispatch(setSort(options))
    dispatch(fetchProducts())
  }
}

// =======================================
// On filter action
// =======================================
export function onFilterAction(options) {
  return dispatch => {
    dispatch(setProducts([]))
    dispatch(setFilters(options))
    dispatch(fetchProducts())
  }
}

// =======================================
// On more action
// =======================================
export function onMoreAction() {
  return (dispatch, getState) => {
    const {
      product: { pageNumber },
    } = getState()

    dispatch(fetchProducts(pageNumber + 1))
  }
}

// =======================================
// Get title
// =======================================
export function onTitleAction() {
  return (dispatch, getState) => {
    const {
      router: { location },
    } = getState()
    const params = parse(location.search)

    let title = ''
    let subtitle = ''

    if (!params) return title

    title = getTitle(params.gender, title)

    title = getTitle(params.search_query, title, !params.gender)
    title = getTitle(params.product_type, title, !params.gender)

    subtitle = getTitle(params.brand, subtitle)
    subtitle = getTitle(params.size, subtitle)
    subtitle = getTitle(params.color, subtitle)

    if (params.sort_by === 'newin') {
      title = `New In ${title}`
    }

    dispatch(setSubtitle(subtitle))
    return dispatch(setTitle(title))
  }
}

// =======================================
// Clear state action
// =======================================
export function clearStateAction() {
  return dispatch => {
    dispatch(clearState())
  }
}

// =======================================
// Heplers
// =======================================
function getUpdatedResponseByFilters(response, params) {
  const updatedResponse = response

  Object.keys(params).forEach(key => {
    if (key === 'product_sub_type') {
      updatedResponse.product_type = updatedResponse.product_type.map(item => {
        const newItem = item

        if (item.children) {
          newItem.children = item.children.map(child => {
            return {
              ...child,
              checked:
                typeof params[key] === 'object'
                  ? params[key].some(param => param === child.label)
                  : child.label === params[key],
            }
          })
        }

        return {
          ...newItem,
          checked: true,
        }
      })
    } else if (updatedResponse[key]) {
      updatedResponse[key] = updatedResponse[key].map(item => {
        return {
          ...item,
          checked:
            typeof params[key] === 'object'
              ? item.value
                ? item.value[0] === parseInt(params[key][0], 10)
                : params[key].some(param => param === item.label)
              : item.label === params[key],
        }
      })
    }
  })

  return updatedResponse
}

function getTitle(param, title, isSeparator = true) {
  let newTitle = title || ''

  if (param) {
    if (typeof param === 'string') {
      newTitle += newTitle
        ? `${isSeparator ? ',' : ''} ${param}`
        : param.replace('^', '&')
    } else if (typeof param === 'object') {
      newTitle += newTitle
        ? `${isSeparator ? ',' : ''} ${param.join(' & ')}`
        : param.join(' & ')
    }
  }

  return newTitle
}

function extractSelectedItems(array, level) {
  const result = []

  if (!array) return []

  if (level < 1) {
    array.forEach(item => {
      if (item.checked) result.push(item.label)
    })
  }

  if (level === 1) {
    array.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          if (child.checked) result.push(child.label)
        })
      }
    })
  }

  return result
}
