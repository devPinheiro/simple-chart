

const fetchAll = async () => {
    try {
        const results = await fetch('https://covidnigeria.herokuapp.com/api')
        return results
    } catch ({error}) {
        console.log(error)
    }
}

export default fetchAll
