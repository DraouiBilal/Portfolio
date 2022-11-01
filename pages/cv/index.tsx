
export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}

const CV = () => {
    return (
        <>
            <div>
                <iframe src="/cv/DRAOUI-BILAL-CV.pdf" height="500" width="100%" />
            </div>
        </>

    )
}

export default CV
