import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [bonusPoints, setBonusPoints] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      bonusPoints,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);

    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
    setBonusPoints('');
  };

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            name='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />

          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>

        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            placeholder="The default colour of the text in the exercise is white which makes it hard to see as it looks like it doesn't update. I set it to black in css, idk if it's intentional"
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>

        
        <div>
          <label htmlFor='bonusPoints'>
            Add bonus points for the bunnies:
          </label>

          <select
            id='bonusPoints'
            name='bonusPoints'
            onChange={e => setBonusPoints(e.target.value)}
            value={bonusPoints}
          >
            <option value='' disabled>
              Select bonus points...
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;