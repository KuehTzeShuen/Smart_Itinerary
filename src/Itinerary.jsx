import React, { useState } from 'react'
import axios from 'axios'
import './Itinerary.css'

const Itinerary = () => {
  const [inputValue, setInputValue] = useState('')
  const [responses, setResponses] = useState([])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    console.log('Input value:', event.target.value) // Log the input value
  }

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed') // Log when Enter key is pressed
      await fetchResponse()
    }
  }

  const handleButtonClick = async () => {
    console.log('Button clicked') // Log when button is clicked
    await fetchResponse()
  }

  const fetchResponse = async () => {
    try {
      console.log('Fetching response for:', inputValue) // Log the input value before fetching
      const apiKey = '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'
      console.log('API Key:', apiKey) // Log the API key
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // Use a valid model
          messages: [
            { role: 'system', content: 'You are a helpful travel itinerary assistant.' },
            { role: 'user', content: 'The user will enter a destination that they want to visit. Please list out a fully detailed 10-day itinerary for the user. Include at least 10 activities per day. Include things like restaurants, tourist hot spots, hotels, clothing you need to bring, culture shock prevention, and other important stuff. Format the response properly as a JSON object with a "day" key for each day and an "activities" key for the list of activities.' },
            { role: 'user', content: inputValue }
          ], // Proper request structure
          max_tokens: 1500,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`, // Use hardcoded API key
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('API response:', result.data) // Log the API response

      // Extract the JSON data from the response string
      const responseText = result.data.choices[0].message.content
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/)

      if (jsonMatch && jsonMatch[1]) {
        const jsonResponse = jsonMatch[1]
        console.log('Extracted JSON:', jsonResponse) // Log the extracted JSON

        // Attempt to parse the extracted JSON data
        try {
          const parsedResponse = JSON.parse(jsonResponse)
          setResponses([...responses, parsedResponse])
          console.log('Updated responses:', [...responses, parsedResponse]) // Log the updated responses
        } catch (parseError) {
          console.error('Error parsing JSON response:', parseError)
        }
      } else {
        console.error('No JSON data found in the response')
      }
    } catch (error) {
      console.error('Error fetching data from OpenAI API:', error)
    }
  }

  return (
    <div>
      <h1>Itinerary Page</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyPress} 
        placeholder="Enter text here" 
      />
      <button onClick={handleButtonClick}>Submit</button>
      <div className="response-box">
        {responses.map((response, index) => (
          <div key={index}>
            {Object.keys(response).map(day => (
              <div key={day}>
                <h2>{day}</h2>
                <ul>
                  {response[day].activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Itinerary
