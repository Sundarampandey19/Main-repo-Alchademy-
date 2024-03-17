"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Logo } from '@/assets';
import Image from 'next/image';



function Talk() {
  const [chat, setChat] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = 'http://localhost:11434/api/generate';

  const requestData = {
    model: 'mistral',
    prompt: chat,
    stream: false,
  };
  
  function sendPrompt() {
    console.log("Prompt sent")
    // Add the current chat to chat history
    setChatHistory(prevChatHistory => [...prevChatHistory, chat]);

    // Display loading animation
    setLoading(true);
    
    // Send axios request
    axios.post(apiUrl, requestData)
    .then(res => {
      // Handle the response here
      const responseData = res.data.response;
      
      // Add the response to chat history
      setChatHistory(prevChatHistory => [...prevChatHistory, responseData]);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error.message);
    })
    .finally(() => {
      // Hide loading animation
      setLoading(false);
    });
  }
  
  return (
    <div  >
      <div className='h-screen bg-white dark:bg-black'>
        
        
        <div className=' flex flex-col pt-6 '>
        {/* <div className='mx-2 sm:mx-auto mb-6 flex sm:flex-wrap  sm:w-[80%]'>
              <img className='w-12 h-12  rounded-full' src="https://st2.depositphotos.com/33928496/48382/v/450/depositphotos_483828962-stock-illustration-logo-letters-monogram-prisma-shape.jpg" alt="kismatLogo" />
               <div className='mx-4 flex-wrap rounded-lg px-3 py-[14px] font-medium text-blue-950 bg-blue-300'>
                 <h1>hello this is Khushe Ranjan. How may I help you?</h1>
                </div>
              </div>
              <div className='mx-2 sm:mx-auto flex sm:flex-wrap sm:w-[80%]'>
              <img className='w-12 h-12 rounded-full' src="https://st2.depositphotos.com/33928496/48382/v/450/depositphotos_483828962-stock-illustration-logo-letters-monogram-prisma-shape.jpg" alt="kismatLogo" />
               <div className='mx-4 flex-wrap rounded-lg px-3 py-[14px] font-medium text-blue-950 bg-blue-300'>
                 <h1>hello this is Khushe Ranjan. How may I help you?</h1>
                </div>
              </div> */}
          {chatHistory.map((item, index) => (
            <div  key={index}>
              <div className='mx-2 mt-4 sm:mx-auto flex sm:flex-wrap sm:w-[80%]'>
              <Image className='w-14' src={Logo} alt="alchademy" />
               <div className='mx-4 flex-wrap rounded-lg px-3 py-[14px] font-medium text-black bg-orange-100'>
                {item}
                </div>
              </div>
              </div>
            ))}
        </div>
        {loading && <p>Loading...</p>}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <div className='fixed bottom-0 w-full py-5  bg-orange-400 h-20'>
        <div className='flex justify-center'>
      <input className='bg-white h-10 rounded-l-lg w-[60%] focus:outline-none pl-3 pb-[1px] text-black'
        type="text"
        placeholder="Enter the prompt"
        onChange={(e) => {
          setChat(e.target.value);
        }}
        />
      <button className='bg-black text-white px-10 rounded-r-lg' onClick={() => sendPrompt()}>Send</button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Talk;