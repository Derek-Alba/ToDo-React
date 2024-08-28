import React from "react"


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true, like: 0 },
//   { text: 'Tomar el curso de Intro a React.js', completed: false, like: 0 },
//   { text: 'Llorar por la Llorona', completed: false, like: 0 },
//   { text: 'lalalala', completed: false, like: 0 }
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName, initialValue) {    //Hook -> Siempre empieza con "use" 
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
                setLoading(false)

            } catch (error) {
                setError(true)
                setLoading(false)
            }

        }, 2000)
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return { item, saveItem, loading, error }
}
export { useLocalStorage }