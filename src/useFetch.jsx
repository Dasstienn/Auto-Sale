import { useEffect, useReducer } from "react"


const actions = {
    api_request: "api-request",
    fetch_data: "fetch-data",
    error: "error"
}

const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer(state, { type, payload }) {
    console.log(payload)
    switch (type) {
        case actions.api_request:
            return { ...state, data: [], loading: true }
        case actions.fetch_data:
            return { ...state, data: payload, loading: false }
        case actions.error:
            return { ...state, data: [], error: payload }
        default:
            return state
    }
}

const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: actions.api_request })
        fetch(url).then((req) => req.json()).then((res) => {
            dispatch({ type: actions.fetch_data, payload: res.results })
        }).catch((err) => {
            dispatch({ type: actions.error, payload: err.error })
        })
    }, [url])


    return state
}

export default useFetch