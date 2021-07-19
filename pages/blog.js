import Head from "next/head"

export default function blog({data}) {
    console.log(data)
    return (
        <div>
            <Head>
                <title>Articles</title>
            </Head>
            <div className={"container my-4"}>
                <h1>Articles</h1>
                <hr />
            </div>
        </div>
    )
}