import React from 'react'


export const useInitialState = () => {
    const [modal,openModal]=React.useState(false)
    return {
        modal,openModal
    }
}
