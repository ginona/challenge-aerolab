import React from 'react'

const useCustomPagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentArray = data.slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage)

    const next = () => {
        setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        setCurrentPage(currentPage - 1);
    }

    const jump = (page) => {
        setCurrentPage(page);
    }

    return { next, prev, jump, currentPage, maxPage, currentArray }
}

export default useCustomPagination;