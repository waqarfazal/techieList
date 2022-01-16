export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map((techie) => {
        return {
            params: {id: techie.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json();

    return {
        props: {techie: data}
    }
}
const Details = ({techie}) => {
    return (
        <div>
            <h1>{techie.name}</h1>
            <p>{techie.email}</p>
            <p>{techie.website}</p>
            <p>{techie.address.city}</p>
        </div>
    )
}

export default Details;