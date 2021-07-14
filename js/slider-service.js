const tabServices = document.querySelectorAll('.services-item')
const contentItems = document.querySelectorAll('.services-content-item')

const findClearActiveClass = (elements, className = 'services-active') => {
    Array.from(elements).find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'services-active') => {
    element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('services-active')) return

        const currentItem = index

        findClearActiveClass(tabServices)
        findClearActiveClass(contentItems)

        setActiveClass(tabServices, currentItem)
        setActiveClass(contentItems, currentItem)
    })
}

tabServices.forEach(checkoutTabs)
