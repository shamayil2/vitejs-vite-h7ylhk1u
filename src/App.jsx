import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [plan, setPlan] = useState('');
  const [interests, setInterests] = useState([]);
  const [updates, setUpdates] = useState('');
  const [comments, setComments] = useState('');
  const [formData, setFormData] = useState(false);

  const interestsHandler = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && mail && plan && interests.length > 0 && updates) {
      setFormData(true);
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <h2>Subscription Form</h2>
        <label htmlFor="nameInput">Full Name:</label>
        <input
          type="text"
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="mailInput">Email:</label>
        <input
          type="mail"
          id="mailInput"
          onChange={(event) => setMail(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="planSelect">Subscription Plan:</label>
        <select
          id="planSelect"
          onChange={(event) => setPlan(event.target.value)}
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Interests:</label>
        <br />
        <input type="checkbox" value="Technology" onChange={interestsHandler} />
        Technology <br />
        <input type="checkbox" value="Fitness" onChange={interestsHandler} />
        Fitness
        <br />
        <input type="checkbox" value="Cooking" onChange={interestsHandler} />
        Cooking
        <br />
        <br />
        <label htmlFor="">Want to Receive Updates:</label>
        <br />
        <input
          type="radio"
          name="updates"
          value="Yes"
          onChange={(event) => setUpdates(event.target.value)}
        />{' '}
        Yes
        <br />
        <input
          type="radio"
          name="updates"
          value="No"
          onChange={(event) => setUpdates(event.target.value)}
        />{' '}
        No
        <br />
        <br />
        <label htmlFor="commentsInput">Comments:</label>
        <br />
        <textarea
          id="commentsInput"
          cols="40"
          rows="5"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Subscribe</button>
      </form>
      {formData && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {mail}</p>
          <p>Subscription Plan : {plan}</p>
          <p>Interests: {interests.join(', ')}</p>
          <p>Want to receive updates: {updates}</p>
          <p>Comments: {comments ? `${comments}` : 'none'}</p>
        </div>
      )}
    </>
  );
}
