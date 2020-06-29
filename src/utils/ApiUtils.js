export class ApiUtils {

  /**
   * @return {string}
   */
  static login() {
    return `auth/on-login`
  }

  /**
   * @return {string}
   */
  static logout() {
    return `auth/on-logout`
  }

  /**
   * @return {string}
   */
  static validateRWSCustomer() {
    return `auth/validate`
  }

  /**
   * @param {string} theme, ex: it can be unauth, men, women
   * @return {string}
   */
  static bannerList(theme) {
    let url = null
    switch (theme) {
      case 'men':
        url = `banners/list-banner?gender=men`
        break
      case 'women':
        url = `banners/list-banner?gender=woman`
        break
      default:
        url = `banners/list-banner`
    }
    return url
  }

  /**
   * @param {string} gender, ex: gender
   * @return {string}
   */
  static shopByCategory(gender) {
    return gender ? `ml/categories?gender=${gender}` : `ml/categories`
  }

  /**
   * @param {number} size, ex: size of the result
   * @return {string}
   */
  static newInList(size) {
    return `ml/new_in?size=${size}`
  }

  /**
   * @return {string}
   */
  static newMessageList() {
    return `messages/list`
  }

  static dismissMessage() {
    return `messages/dismiss`
  }

  /**
   * @return {string}
   */
  static lastChanceList() {
    return `ml/last_chance`
  }

  /**
   * @param {number} size, ex: size of the result
   * @return {string}
   */
  static topBrandsList(size) {
    return `ml/brands?size=${size}`
  }

  /**
   * @param {number} size, ex: size of product
   * @return {string}
   */
  static categoryBySize(size) {
    return `ml/category_by_size?size=${size}`
  }

  /**
   * @param {string} gender, ex: gender
   * @param {number} size, ex: size of product
   * @return {string}
   */
  static productTypeBySubType(gender) {
    return gender
      ? `ml/categories/sub_types?gender=${gender}`
      : `ml/categories/sub_types`
  }

  /**
   * @param {number} pageNo, ex: page number
   * @param {number} pageSize, ex: size of items per one page
   * @param {object} sortOption, ex: {"label": "price", "order":"asc"}
   * @return {string}
   */
  static productList(pageNo, pageSize, sort, order) {
    if (sort && order)
      return (
        `products/list-products-by-filter?` +
        `pageNo=${pageNo}&pageSize=${pageSize}` +
        `&sort=${sort}&order=${order}`
      )
    return (
      `products/list-products-by-filter?` +
      `pageNo=${pageNo}&pageSize=${pageSize}`
    )
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @return {string}
   */
  static productDetail(sku) {
    return `products/get/${sku}`
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @param {string} qty, amount of production
   * @return {string}
   */
  static calculateProductDtd(sku, qty) {
    return sku && qty
      ? `products/calculate-dtd/${sku}/${qty}`
      : `products/calculate-dtd/default`
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @param {number} size, ex: size of product
   * @return {string}
   */
  static similarStyles(sku, size) {
    return `ml/products/${sku}/similar_styles?size=${size}`
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @param {number} size, ex: size of product
   * @return {Array}
   */
  static recentlyViewedItems(sku, size) {
    return `ml/products/${sku}/recently_views?size=${size}`
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @param {number} size, ex: size of product
   * @return {string}
   */
  static compelteLookItems(sku, size) {
    return `ml/products/${sku}/complete_looks?size=${size}`
  }

  /**
   * @param {string} sku, ex: it can be sku of product
   * @return {string}
   */
  static availableItems(sku) {
    return `ml/products/${sku}/also_availables`
  }

  /**
   * @return {string}
   */
  static getAvailableFilter() {
    return `products/available-filter`
  }

    /**
   * @return {string}
   */
  static getAvailableNewFilter() {
    return `products/new-available-filter`
  }

  /**
   * @return {string}
   */
  static getGender() {
    return `ml/gender`
  }

  /**
   * @return {string}
   */
  static getQuestions() {
    return `accounts/questions`
  }

  /**
   * @return {string}
   */
  static questionToAnswer() {
    return `accounts/questions/answer`
  }

  static getCartList() {
    return `purchase/cart/view`
  }

  static addCart() {
    return `purchase/cart/add-product`
  }

  static removeProduct() {
    return 'purchase/cart/remove-product'
  }

  static setProductQty() {
    return 'purchase/cart/set-product-qty'
  }

  /**
   * @param {string} pattern
   * @return {string}
   */
  static getBrandsList(pattern) {
    return `accounts/brands?prefix=${pattern}`
  }

  /**
   * @return {string}
   */
  static getFavoriteBrandsList() {
    return `accounts/brands/favorite`
  }

  /**
   * @return {stringList}
   */
  static getPopularBrandsList() {
    return `accounts/brands/popular`
  }

  /**
   * @param {string} brand
   * @return {string}
   */
  static addBrand(brand) {
    return `accounts/brands/${brand}`
  }

  /**
   * @return {string}
   */
  static getDeliveryAddressList() {
    return `purchase/customer/delivery-addresses/list`
  }

  /**
   * @return {string}
   */
  static addDeliveryAddress() {
    return `purchase/customer/delivery-addresses/add`
  }

  /**
   * @return {string}
   */
  static editDeliveryAddress() {
    return `purchase/customer/delivery-addresses/edit`
  }

  /**
   * @return {string}
   */
  static saveAccountInfo() {
    return `accounts/informations/`
  }

  /**
   * @return {string}
   */
  static getAccountInfo() {
    return `accounts/informations/`
  }

  /**
   * @return {string}
   */
  static accountAddresses() {
    return `accounts/addresses/`
  }

  /**
   * @param {string} addressHash
   * @return {string}
   */
  static getAccountAddress(addressHash) {
    return `accounts/get-address/${addressHash}`
  }

  /**
   * @param {string} addressHash
   * @return {string}
   */
  static deleteAddress(addressHash) {
    return `accounts/delete-address/${addressHash}`
  }

  /**
   * @return {string}
   */
  static addAccountAddress() {
    return `accounts/add-address/`
  }

  /**
   * @return {string}
   */
  static getFavouriteCategoriesList() {
    return `accounts/categories/favorites`
  }

  /**
   * @return {string}
   */
  static getCategoriesList() {
    return `accounts/categories/`
  }

  /**
   *
   * @param {integer} category
   * @return {string}
   */
  static onAddCategory(category) {
    return `accounts/categories/favorites/${category}`
  }

  /**
   *
   * @param {integer} category
   * @return {string}
   */
  static onDeleteCategory(category) {
    return `accounts/categories/favorites/${category}`
  }

  /**
   * @return {string}
   */
  static getFavoriteSizesList() {
    return `accounts/sizes`
  }

  /**
   * @return {string}
   */
  static getPreferencesInfo() {
    return `accounts/preferences`
  }

  /**
   * @return {string}
   */
  static fetchNextTierInfo() {
    return `purchase/checkout/indication/next-tier`
  }

  /**
   * @return {string}
   */
  static setPreferencesInfo() {
    return `accounts/preferences`
  }

  /**
   * @return {string}
   */
  static getCheckoutItems() {
    return 'purchase/checkout/view'
  }

  /**
   * @return {string}
   */
  static initCheckout() {
    return 'purchase/checkout/init'
  }

  /**
   * @return {string}
   */
  static setDeliveryAddress() {
    return 'purchase/checkout/set-delivery-address'
  }

  /**
   * @return {string}
   */
  static useCredit() {
    return `purchase/checkout/credit/usage`
  }

  /**
   * @param {string} method
   * @return {string}
   */
  static paymentCheckout(method) {
    return `purchase/payment-methods/${method}/checkout`
  }

  /**
   * @return {string}
   */
  static trackProductView() {
    return 'tracking/product/view'
  }

  /**
   * @return {string}
   */
  static trackProductVisit() {
    return 'tracking/product/visit'
  }

  /**
   * @return {string}
   */
  static trackProductClick() {
    return 'tracking/product/click'
  }

  /**
   * @return {Array}
   */
  static getOrdersList() {
    return 'purchase/customer/orders/list'
  }

  /**
   * @param {string} orderNumber
   * @return {string}
   */
  static getOrdersView(orderNumber) {
    return `purchase/customer/orders/view/${orderNumber}`
  }

  /**
   * @param {string} orderNumber
   * @return {string} 
   */
  static getOrderCancelInitData(orderNumber) {
    return `purchase/customer/cancellations/create/`
          +`get_initial_data/${orderNumber}`
  } 

  /**
   * @return {string}
   */
  static cancelOrder() {
    return `purchase/customer/cancellations/create/submit`
  }

  /**
   * @return {string}
   */
  static productCustomerDemoList() {
    return `ml/products`
  }

  /**
   * @return {string}
   */
  static productAdminDemoList(secretkey, email) {
    return `ml/admin/${secretkey}/products/${email}`
  }

  /**
   * @return {string}
   */
  static getAdminScoringWeight() {
    return `ml/admin/product_scoring`
  }

  /**
   * @return {string}
   */
  static getAdminClickThroughReport() {
    return `ml/admin/product_scoring/report`
  }

  /**
   * @return {string}
   */
  static setIdentificationNumber() {
    return `accounts/set-on-sign-up`
  }

  /**
   * @return {string}
   */
  static sendInvitation() {
    return `invite-friends/send_invitation`
  }

  // =======================================
  // Search module
  // =======================================
  /**
   * GET - Get all recommendations
   */
  static getRecommendations() {
    return `accounts/brands/favorite`
  }

  /**
   * GET - Get suggestion
   */
  static getSearchSuggestion (query) {
    return `search/suggest/${query}`
  }

  /**
   * @param {string} name
   * DELETE - Remove recommendation
   * POST - Add recommendation
   */
  static editRecommendation(name) {
    return `accounts/brands/${name}`
  }

  /**
   * GET - Get wish info
   */
  static getWishInfo() {
    return `wish/view`
  }

  /**
   * POST - Add product to wish
   */
  static addToWish() {
    return `wish/add-product`
  }

  /**
   * DELETE - Remove product from wish
   */
  static removeFromWish() {
    return 'wish/remove-product'
  }

  /**
   * POST - Add product to seen
   */
  static addProductToSeen() {
    return `seen/add-product`
  }

  /**
   * POST - Add products to seen
   */
  static addProductsToSeen() {
    return `seen/add-products`
  }

  /**
   * GET - Get credit info
   */
  static getCreditInfo() {
    return `credit/get_credit_info`
  }

  /**
   * POST - Request credit cash out
   */
  static creditCashOut() {
    return `credit/credit_cash_out`
  }

  /**
   * POST - Upload contact file
   */
  static uploadContactFile() {
    return `contactus/upload`
  }

  /**
   * POST - Contact
   */
  static contact() {
    return `contactus/contact`
  }

  /**
   * POST - Upload PoP file
   */
  static uploadPoPFile() {
    return `purchase/payment-methods/regular-eft/payment-proof/upload`
  }

  /**
   * POST - Send PoP
   */
  static sendPoPPayment() {
    return `purchase/payment-methods/regular-eft/payment-proof/send`
  }

  // =======================================
  // Policy module
  // =======================================
  /**
   * @param {string} descriptor
   * all the possible descriptors: terms_and_conditions, returns_policy
   * @return {string}
   * GET - Get static html content
   */
  static getStaticPages(descriptor) {
    return `static_page/get/${descriptor}`
  }

  /**
   * GET - Get Tier List
   */
  static getTierList() {
    return `purchase/tiers/list`
  }

  /**
   * GET - Get Fbucks Info
   */
  static getFbucksInfo() {
    return `purchase/customer/credit/info`
  }

  /**
   * GET - Get Returns List
   */
  static getReturnList() {
    return `purchase/customer/returns/list`
  }

  static getReturnDetail(returnId) {
    return `purchase/customer/returns/view/${returnId}`
  }

  /**
   * GET - Get Initial Returns Data
   */
  static getInitialReturnsData() {
    return `purchase/customer/returns/create/get_initial_data`
  }

  /**
   * POST - Create Refund Request
   */
  static submitRefundRequest() {
    return `purchase/customer/returns/create/submit`
  }

  /**
   * POST - Upload File For Return
   */
  static uploadReturnFile() {
    return `purchase/customer/returns/create/upload_file`
  }

  static getCardList() {
    return `purchase/payment-methods/credit-cards/list`
  }

  /**
   * POST - add Card
   * @return {string}
   */
  static addCard() {
    return `purchase/payment-methods/credit-cards/add`
  }

  /**
   * DELETE - delete card
   */
  static deleteCard() {
    return `purchase/payment-methods/credit-cards/remove`
  }
}
