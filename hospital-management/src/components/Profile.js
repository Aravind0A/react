import Navbar from "./Navbar";

function Profile(){
    return(
        <div>
            <Navbar/>
            <div class="form-container">
		 <form class="my-form">
		     <label>Name</label>
		     <input type="text" id="name" name="name" value="Locked" disabled></input><br/>
			 <label>Email</label>
			 <input type="email" id="email" name="email" value="Locked" disabled></input><br/>
			 <label>Date of Birth</label>
			 <input type="text" id="dob" name="dob" value="Locked" disabled></input><br/>
			 <label>Address</label>
			 <input type="text" id="address" name="address" value="Locked" disabled></input><br/>
			 <label>Password</label>
			 <input type="password" id="password" name="password"></input><br/>
		     <button type="submit">Submit</button>
		  </form>
          </div>
        </div>
    )
}

export default Profile;