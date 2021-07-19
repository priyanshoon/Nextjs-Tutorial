import Head from "next/head"

export default function contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={"container my-4"}>
                <h1>Contact Me</h1>
                <hr />
                <form>
                    <div className={"mb-3"}>
                        <label htmlFor="name" className={"form-label"}>Name</label>
                        <input type="text" className={"form-control"} id="name" autoComplete={"off"} />
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="email" className={"form-label"}>Email</label>
                        <input type="email" className={"form-control"} id="email" autoComplete={"off"} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className={"form-label"}>Phone</label>
                        <input type="number" className={"form-control"} id="phone" min={0} autoComplete={"off"} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" class={"form-label"}>Example textarea</label>
                        <textarea className={"form-control"} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <button style={{color: "black" ,backgroundColor: "#00EAD3", fontWeight: "bold"}} type="submit" className={"btn"}>Submit</button>
                </form>
            </div>
            <br />
        </div>
    )
}
