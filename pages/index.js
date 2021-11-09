import { useRef } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

function Home() {
  const formElement = useRef();

  async function registerUser(event) {
    event.preventDefault();

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        name: event.target.name.value,
        message: event.target.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    });

    const result = await res.json();
    console.log(result);
    if (result) formElement.current.reset();
  }

  return (
    <Layout>
      <div id='home-container'>
        <h1>Messaging App</h1>
        <form className='form' ref={formElement} onSubmit={(e) => registerUser(e)}>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' autoComplete='name' required />
          <label htmlFor='message'>Message</label>
          <input id='message' type='text' autoComplete='message' required />
          <button type='submit'>Submit</button>
        </form>
        <Link href='/guestbook'>
          <a className='link'>Go to guestbook</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;