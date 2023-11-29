const deleteHandler = ()=>{
  
    alert("data deleted succesfully")
  
  
  
}
const updateHandler = ()=>{
  alert("data update succesfully")
}

const Image = ({ data }) => {
  
  return (
    
    
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
      </a>
      <div className="flex justify-between mt-2 ">
        <button className="bg-orange-500 rounded-md text-white px-5" onClick={()=>{updateHandler()}}>Update</button>
        <button className="bg-red-500 rounded-md text-white px-5" onClick={()=>{deleteHandler()}}>Delete</button>
      </div>
      </div>
    
     
    
    
  )
}

export default Image