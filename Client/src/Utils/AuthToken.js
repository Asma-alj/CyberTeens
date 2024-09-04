const useToken = () => {
    let token = localStorage.getItem("token")
    let AuthToken = token ?? null

    return {
        Authorization: `Bearer ${AuthToken}`
    }
}

export default useToken;