import Rating from "./component/Rating"
const customMessage = [
  "Жах",
  "Не подобається",
  "Норм",
  "Ok",
  "Супер",
];

const App = () => {
  return (
      <>
      {/* <Rating  heading= "Ваш відгук1" />
      <Rating heading= "Ваш відгук2" />
      <Rating  heading= "Ваш відгук3" /> */}
      <Rating feedBackMessage = {customMessage} />
 
      {/* <Rating  color="green" /> */}

      </>
  )
}

export default App