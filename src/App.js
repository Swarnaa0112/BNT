import './App.css';
import MultiTabForm from './component/MultiTabForm';
import Password from './component/Password';
import PhoneInput from './component/PhoneInput';
import StarRating from './component/StarRating';
import TextTransformer from './component/TextTransformer';
import TrafficLight from './component/TrafficLight';

function App() {
  return (
   <>
   <TrafficLight/>
   <hr />
   <TextTransformer />
   <hr />
   <Password />
   <hr />
   <StarRating />
   <hr />
   <PhoneInput />
   <hr />

   <MultiTabForm />
   </>
  );
}

export default App;
