'use client'
import React, { useState, useEffect } from 'react'

const Work = () => {
  const [data, setData] = useState({
    inputArea: ''
  });

  const [converted, setConverted] = useState(false); // ✅ Track when conversion happens

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.inputArea);

    if (data.inputArea) {
      setData({
        ...data,
        inputArea: data.inputArea.toUpperCase()
      });
      setConverted(true); // ✅ trigger alert using effect
    }
  };

  useEffect(() => {
    if (converted) {
      alert('Converted to uppercase!');
      setConverted(false); // reset the flag
    }
  }, [converted]); // ✅ runs only when conversion happens

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 my-4 mx-5 flex">
        <textarea
          placeholder="Enter your content text"
          name="inputArea"
          value={data.inputArea}
          onChange={handleChange}
          rows="5"
          cols="40"
          style={{ border: '1px solid #ccc', padding: '10px' }}
        />
      </div>

      <button
        className="text-white px-4 py-2 rounded"
        style={{ backgroundColor: 'green' }}
        type="submit"
      >
        Convert Lowercase to Uppercase
      </button>

      {<h2 style={{ marginTop: '20px' }}>
  Text: {data.inputArea}
</h2>}
    </form>
  );
};

export default Work;
