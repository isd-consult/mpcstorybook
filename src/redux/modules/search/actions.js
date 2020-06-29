/* eslint-disable no-console */
import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import uuid from 'uuid'
import { analyticsSearch } from 'analytics'

import {
  setLoading,
  setSuggestions,
  setRecommendations,
  setNewItems,
  setRecommendationRemovingIds,
  setLoaded,
  namespace,
} from './reducer'

import { showNotification } from '../mpc/reducer'

// =======================================
// Fetch suggestions
// =======================================
export const getSuggestions = query => {
  return async (dispatch, getState) => {
    const {
      search: { limitProductSuggestion, limitBrandSuggestion },
    } = getState()

    dispatch(setLoading(true))

    const response = await API.get('mpc', ApiUtils.getSearchSuggestion(query))
    const baseUrl = window.location.origin

    if (response.products && response.brands) {
      const brands = response.brands
        .slice(0, limitBrandSuggestion)
        .map(brand => {
          return {
            id: uuid.v4(),
            label: brand.trim(),
            group: 'brands',
            url: `${baseUrl}/product_list/search?brand=${brand}`,
          }
        })

      const products = response.products
        .slice(0, limitProductSuggestion)
        .map(product => {
          return {
            id: product.sku,
            label: product.name.trim(),
            group: 'products',
            url: `${baseUrl}/product_detail/${product.sku}`,
          }
        })

      dispatch(setSuggestions([...products, ...brands]))
    }

    dispatch(setLoading(false))
  }
}

// =======================================
// Fetch recommendations
// =======================================
// const getRecommendations = () => {
//   return async dispatch => {
//     return new Promise(resolve => {
//       API.get('mpc', ApiUtils.getRecommendations()).then(response => {
//         console.log(response)
//         if (response) {
//           dispatch(
//             setRecommendations(
//               response.reverse().map(item => {
//                 return {
//                   label: item,
//                   value: item,
// eslint-disable-next-line max-len
//                   url: `${window.location.origin}/product_list?brand=${item}`,
//                 }
//               }),
//             ),
//           )
//           resolve()
//         }
//       })
//     })
//   }
// }

// =======================================
// Delete recommendation
// =======================================
export const deleteRecommendation = name => {
  return (dispatch, getState) => {
    dispatch(
      setRecommendationRemovingIds([
        ...getState()[namespace].recommendationRemovingIds,
        name,
      ]),
    )

    API.del('mpc', ApiUtils.editRecommendation(name)).then(response => {
      if (response.status) {
        dispatch(
          setRecommendations(
            getState()[namespace].recommendations.filter(
              item => item.value !== name,
            ),
          ),
        )
        dispatch(
          showNotification({
            message: `Recommendation '${name}' was removed.`,
            category: 'success',
            icon: 'checkmark',
          }),
        )
      } else {
        dispatch(
          showNotification({
            message: `Can't find brand ${name}`,
            category: 'danger',
            icon: 'warning',
          }),
        )
      }

      dispatch(
        setRecommendationRemovingIds(
          getState().search.recommendationRemovingIds.filter(
            item => item !== name,
          ),
        ),
      )
    })
  }
}

// =======================================
// Fetch 'New In For You'
// =======================================
// const getNewItems = () => {
//   return dispatch => {
//     return new Promise(async resolve => {
//       const response = await API.get('mpc', ApiUtils.newInList(10))

//       if (response) {
//         dispatch(setNewItems(response))
//       }

//       resolve()
//     })
//   }
// }

// =======================================
// Fetch search data
// =======================================
export const getSearchData = () => {
  return dispatch => {
    return Promise.all([
      dispatch(
        setNewItems([
          { label: 'Jeans', value: '/product_list/search?product_type=Jeans' },
          {
            label: 'Dresses',
            value: '/product_list/search?product_type=Dresses',
          },
          {
            label: 'Activewear',
            value: '/product_list/search?product_type=Activewear',
          },
          {
            label: 'Jackets',
            value: '/product_list/search?product_type=Jackets',
          },
          { label: 'Shoes', value: '/product_list/search?product_type=Shoes' },
        ]),
      ),
      dispatch(setRecommendations([])),
      // dispatch(getNewItems()),
      // dispatch(getRecommendations()),
    ]).then(() => {
      dispatch(setLoaded())
    })
  }
}

// =======================================
// On search handler
// =======================================
export const search = (query, url) => {
  return () => {
    return new Promise(async resolve => {
      // const response = await API.post(
      //   'mpc',
      //   ApiUtils.editRecommendation(query),
      //   {
      //     body: {},
      //   },
      // )

      analyticsSearch(query).then(() => {
        const redirectURL =
          url ||
          `${window.location.origin}/product_list/search?search_query=${query}`

        window.location.replace(redirectURL)
        resolve()
      })
    })
  }
}
