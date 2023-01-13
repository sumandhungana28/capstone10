import React, { useState } from 'react';

function Reservation() {
   const[date,setDate]=useState("");
   const[time,setTime]=useState("select time");
   const[guest,setGuest]=useState("");
   const[occasion,setOccasion]=useState("");


   const clearForm=()=>{
      setDate("");
      setTime("");
      setGuest("");
      setOccasion("occasion");
   }

const handleSubmit=(e=>{
   e.preventDefault();
   alert("reservation submitted");
   clearForm();
});

  return (
    <div>
reservation page


<form 
onSubmit={handleSubmit} style={{display: "grid", maxwidth:"200px", 
gap: "20px"}}
>
   <label htmlFor="res-date">Choose date</label>
   <input 
   onChange={(e)=>{setDate(e.target.value)}}
   value={date}
   type="date" id="res-date" />
   <label htmlFor="res-time">Choose time</label>
   <select value={time}
   onChange={(e)=>setTime(e.target.value)}
    id="res-time ">
      <option value="time1">17:00</option>
      <option value="time2">18:00</option>
      <option value="time3">19:00</option>
      <option value="time4">20:00</option>
      <option value="time5">21:00</option>
      <option value="time6">22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input
   onChange={(e)=>setGuest(e.target.value)} 
    type="number" placeholder="1" min="1" max="10" id="guests"
    value={guest}
     />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion"
   value={occasion}
    onChange={(e)=>setOccasion(e.target.value)} 
   >
      <option value="occasion1">Birthday</option>
      <option value="occasion2">Anniversary</option>
   </select>
   <input 

   type="submit" value="Make Your reservation" />
</form> 
      
    </div>
  )
}

export default Reservation;
