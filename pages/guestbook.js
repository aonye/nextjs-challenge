import Link from 'next/link';

function GuestBook({ data }) {

    function displayData(arr) {
        return arr.map((item, index) => {
            return (
                <div className='msg-cont' key={index}>
                    <span className='bold'>{item.name}</span>
                    <span className='small-text indent'>{item.message}</span>
                </div>
            );
        })
    }

    displayData(data);

    return (
        <div id='guestbook-container'>
            {displayData(data)}
            <Link href='/'>
                <a className='link'>Go back home</a>
            </Link>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/guestbook`);
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data } }
}

export default GuestBook;