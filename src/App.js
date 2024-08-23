import React from 'react'
import './App.css';

function App() {
  return (
      
<>
    <div class="container">
        <h2>Sign In</h2>
        <form>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required/>
                <label for="=lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Afganistan">Afganistan</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                    <option value="West Indies">West Indies</option>
                    <option value="Newzeland">Newzeland</option>
                    <option value="SouthAfrica">SouthAfrica</option>
                    <option value="Srilanka">Srilanka</option>
                  
                </select>
            </div>
            <div class="form-group">
            <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
</> 

  )
}

export default App
