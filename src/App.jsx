import { useState } from "react"
import Hello from "./components/Hello"
import NewsBoard from "./components/NewsBoard"



const App = () => {

  const [category,setCategory] = useState("business")
  return (
    <div>
<Hello setCategory={setCategory}/>
<NewsBoard category={category}/>
    </div>
  )
}

export default App
